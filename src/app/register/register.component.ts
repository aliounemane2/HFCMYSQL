import { RegisterService } from './../service/register.service';
import { HttpClient, HttpParams,HttpErrorResponse, HttpHeaders,HttpRequest } from '@angular/common/http';
import { Headers, Request, RequestOptions } from '@angular/http';
import { user } from './../login/user';
import { Component, OnInit, Directive,ViewContainerRef} from '@angular/core';
import * as $ from 'jquery'; 
import { EmailValidator } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor( private http:HttpClient, private service:RegisterService,public toastr: ToastsManager, vcr: ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

    utilisateur:user;
    isdakar:boolean;
    sexe:boolean;
    file: File;
    status : boolean;
    statusemail : boolean;
    invalidemail : boolean;
    verifpassword: boolean;
    loginOK : boolean;

  ngOnInit() {
    this.utilisateur = new user();
    this.isdakar = true;
    this.sexe = true;
    this.status = false;
    this.statusemail = false;
    this.invalidemail = true;
    this.verifpassword = true;
    this.loginOK = true;
    $(document).ready(function() {
            //Login animation to center 
            function toCenter() {
                var mainH = $("#main").outerHeight();
                var accountH = $(".account-wall").outerHeight();
                var marginT = (mainH - accountH) / 2;
                if (marginT > 30) {
                    $(".account-wall").css("margin-top", marginT - 0);
                } else {
                    $(".account-wall").css("margin-top", 0);
                }
            }
            toCenter();
            var toResize;
            $(window).resize(function(e) {
                clearTimeout(toResize);
                toResize = setTimeout(toCenter(), 500);
            });
        });
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) 
    {
      this.file = fileList[0];
    }
  }

  onSubmit(){
    this.loginOK = false;
    this.utilisateur.isDakar = this.isdakar;
    this.utilisateur.sexe = this.sexe == true ? "masculin" : "feminin";
    this.service.Save_Inscription(this.file, this.utilisateur).subscribe(
      data => {
        let message = data["body"];
        if(message !== undefined){
          this.toastr.success(message["message"]+" "+message["corps"],"Information !");
          this.loginOK = true;
        }
        },
      (err: HttpErrorResponse) =>{
          this.loginOK = true;
          console.log(JSON.stringify(err));
      });
  }

  Verifier_Pseudo(){
    this.service.Verifier_Pseudo(this.utilisateur.pseudo).subscribe(
      data => {
        this.status = data["corps"]==="0" ? true : false;
      },
      error => {
        console.log(error);
      });
    
  }

  Verifier_Email(){
    this.service.Verifier_Email(this.utilisateur.email,0).subscribe(
      data => {
        this.statusemail = data["corps"]==="0" ? true : false;
      },
      error => {
        console.log(error);
      });
  }

  VerifierPassword(){
    this.verifpassword = this.utilisateur.password !== this.utilisateur.confirmpassword
                        && this.utilisateur.confirmpassword != undefined 
                        && this.utilisateur.password != undefined ? false : true;
  }
}

