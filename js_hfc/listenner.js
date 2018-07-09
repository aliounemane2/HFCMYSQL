//var mysql = require('mysql');
/*var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hfc_db"
});
*/

var soundManager = require('soundmanager2');
console.log("SM2", soundManager);

var fooSound;
var fauxSound;

/*
soundManager.soundManager.setup({
  // where to find flash audio SWFs, as needed
  //url: '/path/to/swf-files/',
  onready: function() {
    console.log("  SM2 is ready . play audio!");
	fooSound = soundManager.soundManager.createSound({
			url: '../foo.mp3'
		});
	fooSound.play();
	
	
  }
});*/


/*soundManager.onready = function() {
		// SM2 is ready to play audio!
		console.log("  SM2 is ready . play audio!");
		var mySound = window.soundManager.createSound({
			url: 'faux.mp3'
		});

	// ...and play it
		mySound.play();
	  }*/




/*

var con = mysql.createConnection({
  host: "109.107.36.85",
  user: "admin",
  password: "lkrkas8g20fpixj3",
  database: "hfc_db"
});

*/

var gkm = require('gkm');
// Listen to all key events (pressed, released, typed)
var b = "";
gkm.events.on('key.pressed', function(data) {
    // gkm.events.on('key.*', function(data) {

    if (!isNaN(data)) {
        b = b + data;
        if (b.length < 10) {
            console.log(" ######### moins 10 caractères ######### ");
            console.log(" La valeur de B  moins de 10 caracteres est : " + b);
        } else if (b.length == 10) {

            console.log(" ######### 10 caractères ######### ");
            console.log(" La valeur de B  égale de 10 caracteres est : " + b);
            var c = b;

            var currentDate = new Date();
            var day = currentDate.getDate();
            var month = currentDate.getMonth() + 1;
            var year = currentDate.getFullYear();
            var nows;



            if (day == 1) {

                var days = "0" + 1;

                if (month == 1) {
                    var months = "0" + 1;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 2) {
                    var months = "0" + 2;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 3) {
                    var months = "0" + 3;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 4) {
                    var months = "0" + 4;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 5) {
                    var months = "0" + 5;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 6) {
                    var months = "0" + 6;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 7) {
                    var months = "0" + 7;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 8) {
                    var months = "0" + 8;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 9) {
                    var months = "0" + 9;
                    nows = year + "-" + months + "-" + days;
                } else {
                    var months = month;
                    nows = year + "-" + months + "-" + days;
                }

                // nows = year+"-"+month+"-"+days;
            } else if (day == 2) {

                var days = "0" + 2;
                if (month == 1) {
                    var months = "0" + 1;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 2) {
                    var months = "0" + 2;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 3) {
                    var months = "0" + 3;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 4) {
                    var months = "0" + 4;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 5) {
                    var months = "0" + 5;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 6) {
                    var months = "0" + 6;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 7) {
                    var months = "0" + 7;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 8) {
                    var months = "0" + 8;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 9) {
                    var months = "0" + 9;
                    nows = year + "-" + months + "-" + days;
                } else {
                    var months = month;
                    nows = year + "-" + months + "-" + days;
                }
                // nows = year+"-"+month+"-"+days;
            } else if (day == 3) {

                var days = "0" + 3;
                if (month == 1) {
                    var months = "0" + 1;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 2) {
                    var months = "0" + 2;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 3) {
                    var months = "0" + 3;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 4) {
                    var months = "0" + 4;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 5) {
                    var months = "0" + 5;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 6) {
                    var months = "0" + 6;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 7) {
                    var months = "0" + 7;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 8) {
                    var months = "0" + 8;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 9) {
                    var months = "0" + 9;
                    nows = year + "-" + months + "-" + days;
                } else {
                    var months = month;
                    nows = year + "-" + months + "-" + days;
                }
                // nows = year+"-"+month+"-"+days;
            } else if (day == 4) {

                var days = "0" + 4;
                if (month == 1) {
                    var months = "0" + 1;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 2) {
                    var months = "0" + 2;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 3) {
                    var months = "0" + 3;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 4) {
                    var months = "0" + 4;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 5) {
                    var months = "0" + 5;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 6) {
                    var months = "0" + 6;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 7) {
                    var months = "0" + 7;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 8) {
                    var months = "0" + 8;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 9) {
                    var months = "0" + 9;
                    nows = year + "-" + months + "-" + days;
                } else {
                    var months = month;
                    nows = year + "-" + months + "-" + days;
                }
                // nows = year+"-"+month+"-"+days;
            } else if (day == 5) {

                var days = "0" + 5;
                if (month == 1) {
                    var months = "0" + 1;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 2) {
                    var months = "0" + 2;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 3) {
                    var months = "0" + 3;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 4) {
                    var months = "0" + 4;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 5) {
                    var months = "0" + 5;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 6) {
                    var months = "0" + 6;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 7) {
                    var months = "0" + 7;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 8) {
                    var months = "0" + 8;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 9) {
                    var months = "0" + 9;
                    nows = year + "-" + months + "-" + days;
                } else {
                    var months = month;
                    nows = year + "-" + months + "-" + days;
                }
                // nows = year+"-"+month+"-"+days;
            } else if (day == 6) {

                var days = "0" + 6;
                if (month == 1) {
                    var months = "0" + 1;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 2) {
                    var months = "0" + 2;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 3) {
                    var months = "0" + 3;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 4) {
                    var months = "0" + 4;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 5) {
                    var months = "0" + 5;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 6) {
                    var months = "0" + 6;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 7) {
                    var months = "0" + 7;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 8) {
                    var months = "0" + 8;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 9) {
                    var months = "0" + 9;
                    nows = year + "-" + months + "-" + days;
                } else {
                    var months = month;
                    nows = year + "-" + months + "-" + days;
                }
                // nows = year+"-"+month+"-"+days;
            } else if (day == 7) {

                var days = "0" + 7;
                if (month == 1) {
                    var months = "0" + 1;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 2) {
                    var months = "0" + 2;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 3) {
                    var months = "0" + 3;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 4) {
                    var months = "0" + 4;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 5) {
                    var months = "0" + 5;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 6) {
                    var months = "0" + 6;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 7) {
                    var months = "0" + 7;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 8) {
                    var months = "0" + 8;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 9) {
                    var months = "0" + 9;
                    nows = year + "-" + months + "-" + days;
                } else {
                    var months = month;
                    nows = year + "-" + months + "-" + days;
                }
                // nows = year+"-"+month+"-"+days;
            } else if (day == 8) {

                var days = "0" + 8;
                if (month == 1) {
                    var months = "0" + 1;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 2) {
                    var months = "0" + 2;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 3) {
                    var months = "0" + 3;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 4) {
                    var months = "0" + 4;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 5) {
                    var months = "0" + 5;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 6) {
                    var months = "0" + 6;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 7) {
                    var months = "0" + 7;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 8) {
                    var months = "0" + 8;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 9) {
                    var months = "0" + 9;
                    nows = year + "-" + months + "-" + days;
                } else {
                    var months = month;
                    nows = year + "-" + months + "-" + days;
                }
                // nows = year+"-"+month+"-"+days;
            } else if (day == 9) {

                var days = "0" + 9;
                if (month == 1) {
                    var months = "0" + 1;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 2) {
                    var months = "0" + 2;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 3) {
                    var months = "0" + 3;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 4) {
                    var months = "0" + 4;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 5) {
                    var months = "0" + 5;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 6) {
                    var months = "0" + 6;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 7) {
                    var months = "0" + 7;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 8) {
                    var months = "0" + 8;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 9) {
                    var months = "0" + 9;
                    nows = year + "-" + months + "-" + days;
                } else {
                    var months = month;
                    nows = year + "-" + months + "-" + days;
                }
                // nows = year+"-"+month+"-"+day;
            } else {

                var days = day;
                if (month == 1) {
                    var months = "0" + 1;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 2) {
                    var months = "0" + 2;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 3) {
                    var months = "0" + 3;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 4) {
                    var months = "0" + 4;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 5) {
                    var months = "0" + 5;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 6) {
                    var months = "0" + 6;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 7) {
                    var months = "0" + 7;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 8) {
                    var months = "0" + 8;
                    nows = year + "-" + months + "-" + days;
                } else if (month == 9) {
                    var months = "0" + 9;
                    nows = year + "-" + months + "-" + days;
                } else {
                    var months = month;
                    nows = year + "-" + months + "-" + days;
                }
                // nows = year+"-"+month+"-"+days;
            }



            console.log("  DATE " + nows);

            function process(date) {

                // var parts = date.split("/");
                var parts = date.split("-");
                // var date = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
                var date = new Date(parts[1] + "-" + parts[0] + "-" + parts[2]);
                return date.getTime();
            }


            console.log(" LA VALEUR DE B " + c);

            con.connect(function(err) {


                console.log("  BBBOOOOOOONNNNNN ");
                console.log("  BBBOOOOOOONNNNNN " + c);


                // if (err) throw err;
                console.log("Connected!");

                var sql1 = "SELECT users_utilisateur2.id, users_utilisateur2.email, users_utilisateur2.photo, users_utilisateur2.idcarte, users_utilisateur2.id_typeabonnement, users_utilisateur2.civilite, users_utilisateur2.prenom, users_utilisateur2.nom, users_utilisateur2.dateNaiss, users_utilisateur2.profession, users_paiement.date_debut, users_paiement.date_fin, users_paiement.nbseances_total, users_paiement.nbseances_en_cours, users_paiement.dateencours, users_paiement.idUser, users_paiement.idPaiement, users_paiement.date_autorisation FROM users_utilisateur2, users_paiement WHERE users_utilisateur2.idcarte=" + c + " AND users_utilisateur2.id=users_paiement.idUser ORDER BY users_paiement.idPaiement DESC LIMIT 1";
                
                




                con.query(sql1, function(err, result, fields) {

                    console.log(" LA valeur de bb est " + c);
                    console.log(" COOl " + sql1);
                    console.log(result);


                    var dddddddd = "2016-10-10";
                    // console.log(" CCCCOOOOOOLLLLLLL "+process(dddddddd));


                    // console.log(result.length);

                    if (result.length > 0){






                        console.log(" valeur > 0 ");
                        console.log("  cool ");

                        console.log(" valeur > 01 " + result[0].date_fin);
                        console.log(" valeur > 00 " + nows);

                        console.log("  COOLL 00000000 ");
                        // console.log(result);



                                    var nows11;
                                    var currentDate = new Date();
                                    var dayss = currentDate.getDate();
                                    var month = currentDate.getMonth() + 1;
                                    var year = currentDate.getFullYear();

                                    var hours = currentDate.getHours();
                                    var minutes = currentDate.getMinutes();
                                    var secondes = currentDate.getSeconds();


        



                                if (dayss == 1){

                                    if (hours ==1){
                                        hours = "0"+1;
                                    }else if (hours ==2){
                                        hours = "0"+2;

                                    }else if (hours ==3){
                                        hours = "0"+3;

                                    }else if (hours ==4){
                                        hours = "0"+4;

                                    }else if (hours ==5){
                                        hours = "0"+5;

                                    }else if (hours ==6){
                                        hours = "0"+6;

                                    }else if (hours ==7){
                                        hours = "0"+7;

                                    }else if (hours ==8){
                                        hours = "0"+8;

                                    }else if (hours ==9){
                                        hours = "0"+9;

                                    }else if (hours ==0){
                                        hours = "0"+0;

                                    }else{
                                        hours = hours;
                                    }



                                    if (minutes ==1){
                                        minutes = "0"+1;
                                    }else if (minutes ==2){
                                        minutes = "0"+2;

                                    }else if (minutes ==3){
                                        minutes = "0"+3;

                                    }else if (minutes ==4){
                                        minutes = "0"+4;

                                    }else if (minutes ==5){
                                        minutes = "0"+5;

                                    }else if (minutes ==6){
                                        minutes = "0"+6;

                                    }else if (minutes ==7){
                                        minutes = "0"+7;

                                    }else if (minutes ==8){
                                        minutes = "0"+8;

                                    }else if (minutes ==9){
                                        minutes = "0"+9;

                                    }else if (minutes ==0){
                                        minutes = "0"+0;

                                    }else{
                                        minutes = minutes;
                                    }

                                    

                                    if (secondes ==1){
                                        secondes = "0"+1;
                                    }else if (secondes ==2){
                                        secondes = "0"+2;

                                    }else if (secondes ==3){
                                        secondes = "0"+3;

                                    }else if (secondes ==4){
                                        secondes = "0"+4;

                                    }else if (secondes ==5){
                                        secondes = "0"+5;

                                    }else if (secondes ==6){
                                        secondes = "0"+6;

                                    }else if (secondes ==7){
                                        secondes = "0"+7;

                                    }else if (secondes ==8){
                                        secondes = "0"+8;

                                    }else if (secondes ==9){
                                        secondes = "0"+9;

                                    }else if (secondes ==0){
                                        secondes = "0"+0;

                                    }else{
                                        secondes = secondes;
                                    }
                                    


                                    var days = "0"+1;
                                    if (month == 1){
                                        var months = "0"+1;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    } else if (month == 2){
                                        var months = "0"+2;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 3){
                                        var months = "0"+3;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 4){
                                        var months = "0"+4;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 5){
                                        var months = "0"+5;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 6){
                                        var months = "0"+6;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 7){
                                        var months = "0"+7;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 8){
                                        var months = "0"+8;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 9){
                                        var months = "0"+9;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else {
                                        var months = month;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }
                                } else if (dayss == 2){

                                    if (hours ==1){
                                        hours = "0"+1;
                                    }else if (hours ==2){
                                        hours = "0"+2;

                                    }else if (hours ==3){
                                        hours = "0"+3;

                                    }else if (hours ==4){
                                        hours = "0"+4;

                                    }else if (hours ==5){
                                        hours = "0"+5;

                                    }else if (hours ==6){
                                        hours = "0"+6;

                                    }else if (hours ==7){
                                        hours = "0"+7;

                                    }else if (hours ==8){
                                        hours = "0"+8;

                                    }else if (hours ==9){
                                        hours = "0"+9;

                                    }else if (hours ==0){
                                        hours = "0"+0;

                                    }else{
                                        hours = hours;
                                    }



                                    if (minutes ==1){
                                        minutes = "0"+1;
                                    }else if (minutes ==2){
                                        minutes = "0"+2;

                                    }else if (minutes ==3){
                                        minutes = "0"+3;

                                    }else if (minutes ==4){
                                        minutes = "0"+4;

                                    }else if (minutes ==5){
                                        minutes = "0"+5;

                                    }else if (minutes ==6){
                                        minutes = "0"+6;

                                    }else if (minutes ==7){
                                        minutes = "0"+7;

                                    }else if (minutes ==8){
                                        minutes = "0"+8;

                                    }else if (minutes ==9){
                                        minutes = "0"+9;

                                    }else if (minutes ==0){
                                        minutes = "0"+0;

                                    }else{
                                        minutes = minutes;
                                    }

                                    

                                    if (secondes ==1){
                                        secondes = "0"+1;
                                    }else if (secondes ==2){
                                        secondes = "0"+2;

                                    }else if (secondes ==3){
                                        secondes = "0"+3;

                                    }else if (secondes ==4){
                                        secondes = "0"+4;

                                    }else if (secondes ==5){
                                        secondes = "0"+5;

                                    }else if (secondes ==6){
                                        secondes = "0"+6;

                                    }else if (secondes ==7){
                                        secondes = "0"+7;

                                    }else if (secondes ==8){
                                        secondes = "0"+8;

                                    }else if (secondes ==9){
                                        secondes = "0"+9;

                                    }else if (secondes ==0){
                                        secondes = "0"+0;

                                    }else{
                                        secondes = secondes;
                                    }
                                    

                                    var days = "0"+2;
                                    // nows11 = year+"-"+month+"-"+days;
                                     if (month == 1){
                                        var months = "0"+1;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    } else if (month == 2){
                                        var months = "0"+2;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 3){
                                        var months = "0"+3;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 4){
                                        var months = "0"+4;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 5){
                                        var months = "0"+5;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 6){
                                        var months = "0"+6;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 7){
                                        var months = "0"+7;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 8){
                                        var months = "0"+8;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 9){
                                        var months = "0"+9;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else {
                                        var months = month;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }
                                }else if (dayss == 3){

                                    if (hours ==1){
                                        hours = "0"+1;
                                    }else if (hours ==2){
                                        hours = "0"+2;

                                    }else if (hours ==3){
                                        hours = "0"+3;

                                    }else if (hours ==4){
                                        hours = "0"+4;

                                    }else if (hours ==5){
                                        hours = "0"+5;

                                    }else if (hours ==6){
                                        hours = "0"+6;

                                    }else if (hours ==7){
                                        hours = "0"+7;

                                    }else if (hours ==8){
                                        hours = "0"+8;

                                    }else if (hours ==9){
                                        hours = "0"+9;

                                    }else if (hours ==0){
                                        hours = "0"+0;

                                    }else{
                                        hours = hours;
                                    }



                                    if (minutes ==1){
                                        minutes = "0"+1;
                                    }else if (minutes ==2){
                                        minutes = "0"+2;

                                    }else if (minutes ==3){
                                        minutes = "0"+3;

                                    }else if (minutes ==4){
                                        minutes = "0"+4;

                                    }else if (minutes ==5){
                                        minutes = "0"+5;

                                    }else if (minutes ==6){
                                        minutes = "0"+6;

                                    }else if (minutes ==7){
                                        minutes = "0"+7;

                                    }else if (minutes ==8){
                                        minutes = "0"+8;

                                    }else if (minutes ==9){
                                        minutes = "0"+9;

                                    }else if (minutes ==0){
                                        minutes = "0"+0;

                                    }else{
                                        minutes = minutes;
                                    }

                                    

                                    if (secondes ==1){
                                        secondes = "0"+1;
                                    }else if (secondes ==2){
                                        secondes = "0"+2;

                                    }else if (secondes ==3){
                                        secondes = "0"+3;

                                    }else if (secondes ==4){
                                        secondes = "0"+4;

                                    }else if (secondes ==5){
                                        secondes = "0"+5;

                                    }else if (secondes ==6){
                                        secondes = "0"+6;

                                    }else if (secondes ==7){
                                        secondes = "0"+7;

                                    }else if (secondes ==8){
                                        secondes = "0"+8;

                                    }else if (secondes ==9){
                                        secondes = "0"+9;

                                    }else if (secondes ==0){
                                        secondes = "0"+0;

                                    }else{
                                        secondes = secondes;
                                    }
                                    
                                    var days = "0"+3;
                                    // nows11 = year+"-"+month+"-"+days;
                                     if (month == 1){
                                        var months = "0"+1;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    } else if (month == 2){
                                        var months = "0"+2;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 3){
                                        var months = "0"+3;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 4){
                                        var months = "0"+4;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 5){
                                        var months = "0"+5;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 6){
                                        var months = "0"+6;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 7){
                                        var months = "0"+7;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 8){
                                        var months = "0"+8;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 9){
                                        var months = "0"+9;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else {
                                        var months = month;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }
                                }else if (dayss == 4){

                                    if (hours ==1){
                                        hours = "0"+1;
                                    }else if (hours ==2){
                                        hours = "0"+2;

                                    }else if (hours ==3){
                                        hours = "0"+3;

                                    }else if (hours ==4){
                                        hours = "0"+4;

                                    }else if (hours ==5){
                                        hours = "0"+5;

                                    }else if (hours ==6){
                                        hours = "0"+6;

                                    }else if (hours ==7){
                                        hours = "0"+7;

                                    }else if (hours ==8){
                                        hours = "0"+8;

                                    }else if (hours ==9){
                                        hours = "0"+9;

                                    }else if (hours ==0){
                                        hours = "0"+0;

                                    }else{
                                        hours = hours;
                                    }



                                    if (minutes ==1){
                                        minutes = "0"+1;
                                    }else if (minutes ==2){
                                        minutes = "0"+2;

                                    }else if (minutes ==3){
                                        minutes = "0"+3;

                                    }else if (minutes ==4){
                                        minutes = "0"+4;

                                    }else if (minutes ==5){
                                        minutes = "0"+5;

                                    }else if (minutes ==6){
                                        minutes = "0"+6;

                                    }else if (minutes ==7){
                                        minutes = "0"+7;

                                    }else if (minutes ==8){
                                        minutes = "0"+8;

                                    }else if (minutes ==9){
                                        minutes = "0"+9;

                                    }else if (minutes ==0){
                                        minutes = "0"+0;

                                    }else{
                                        minutes = minutes;
                                    }

                                    

                                    if (secondes ==1){
                                        secondes = "0"+1;
                                    }else if (secondes ==2){
                                        secondes = "0"+2;

                                    }else if (secondes ==3){
                                        secondes = "0"+3;

                                    }else if (secondes ==4){
                                        secondes = "0"+4;

                                    }else if (secondes ==5){
                                        secondes = "0"+5;

                                    }else if (secondes ==6){
                                        secondes = "0"+6;

                                    }else if (secondes ==7){
                                        secondes = "0"+7;

                                    }else if (secondes ==8){
                                        secondes = "0"+8;

                                    }else if (secondes ==9){
                                        secondes = "0"+9;

                                    }else if (secondes ==0){
                                        secondes = "0"+0;

                                    }else{
                                        secondes = secondes;
                                    }
                                    
                                    var days = "0"+4;
                                    // nows11 = year+"-"+month+"-"+days;
                                     if (month == 1){
                                        var months = "0"+1;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    } else if (month == 2){
                                        var months = "0"+2;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 3){
                                        var months = "0"+3;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 4){
                                        var months = "0"+4;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 5){
                                        var months = "0"+5;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 6){
                                        var months = "0"+6;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 7){
                                        var months = "0"+7;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 8){
                                        var months = "0"+8;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 9){
                                        var months = "0"+9;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else {
                                        var months = month;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }
                                }else if (dayss == 5){

                                    if (hours ==1){
                                        hours = "0"+1;
                                    }else if (hours ==2){
                                        hours = "0"+2;

                                    }else if (hours ==3){
                                        hours = "0"+3;

                                    }else if (hours ==4){
                                        hours = "0"+4;

                                    }else if (hours ==5){
                                        hours = "0"+5;

                                    }else if (hours ==6){
                                        hours = "0"+6;

                                    }else if (hours ==7){
                                        hours = "0"+7;

                                    }else if (hours ==8){
                                        hours = "0"+8;

                                    }else if (hours ==9){
                                        hours = "0"+9;

                                    }else if (hours ==0){
                                        hours = "0"+0;

                                    }else{
                                        hours = hours;
                                    }



                                    if (minutes ==1){
                                        minutes = "0"+1;
                                    }else if (minutes ==2){
                                        minutes = "0"+2;

                                    }else if (minutes ==3){
                                        minutes = "0"+3;

                                    }else if (minutes ==4){
                                        minutes = "0"+4;

                                    }else if (minutes ==5){
                                        minutes = "0"+5;

                                    }else if (minutes ==6){
                                        minutes = "0"+6;

                                    }else if (minutes ==7){
                                        minutes = "0"+7;

                                    }else if (minutes ==8){
                                        minutes = "0"+8;

                                    }else if (minutes ==9){
                                        minutes = "0"+9;

                                    }else if (minutes ==0){
                                        minutes = "0"+0;

                                    }else{
                                        minutes = minutes;
                                    }

                                    

                                    if (secondes ==1){
                                        secondes = "0"+1;
                                    }else if (secondes ==2){
                                        secondes = "0"+2;

                                    }else if (secondes ==3){
                                        secondes = "0"+3;

                                    }else if (secondes ==4){
                                        secondes = "0"+4;

                                    }else if (secondes ==5){
                                        secondes = "0"+5;

                                    }else if (secondes ==6){
                                        secondes = "0"+6;

                                    }else if (secondes ==7){
                                        secondes = "0"+7;

                                    }else if (secondes ==8){
                                        secondes = "0"+8;

                                    }else if (secondes ==9){
                                        secondes = "0"+9;

                                    }else if (secondes ==0){
                                        secondes = "0"+0;

                                    }else{
                                        secondes = secondes;
                                    }
                                    
                                    var days = "0"+5;
                                    // nows11 = year+"-"+month+"-"+days;
                                     if (month == 1){
                                        var months = "0"+1;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    } else if (month == 2){
                                        var months = "0"+2;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 3){
                                        var months = "0"+3;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 4){
                                        var months = "0"+4;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 5){
                                        var months = "0"+5;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 6){
                                        var months = "0"+6;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 7){
                                        var months = "0"+7;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 8){
                                        var months = "0"+8;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 9){
                                        var months = "0"+9;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else {
                                        var months = month;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }
                                }else if (dayss == 6){

                                    if (hours ==1){
                                        hours = "0"+1;
                                    }else if (hours ==2){
                                        hours = "0"+2;

                                    }else if (hours ==3){
                                        hours = "0"+3;

                                    }else if (hours ==4){
                                        hours = "0"+4;

                                    }else if (hours ==5){
                                        hours = "0"+5;

                                    }else if (hours ==6){
                                        hours = "0"+6;

                                    }else if (hours ==7){
                                        hours = "0"+7;

                                    }else if (hours ==8){
                                        hours = "0"+8;

                                    }else if (hours ==9){
                                        hours = "0"+9;

                                    }else if (hours ==0){
                                        hours = "0"+0;

                                    }else{
                                        hours = hours;
                                    }



                                    if (minutes ==1){
                                        minutes = "0"+1;
                                    }else if (minutes ==2){
                                        minutes = "0"+2;

                                    }else if (minutes ==3){
                                        minutes = "0"+3;

                                    }else if (minutes ==4){
                                        minutes = "0"+4;

                                    }else if (minutes ==5){
                                        minutes = "0"+5;

                                    }else if (minutes ==6){
                                        minutes = "0"+6;

                                    }else if (minutes ==7){
                                        minutes = "0"+7;

                                    }else if (minutes ==8){
                                        minutes = "0"+8;

                                    }else if (minutes ==9){
                                        minutes = "0"+9;

                                    }else if (minutes ==0){
                                        minutes = "0"+0;

                                    }else{
                                        minutes = minutes;
                                    }

                                    

                                    if (secondes ==1){
                                        secondes = "0"+1;
                                    }else if (secondes ==2){
                                        secondes = "0"+2;

                                    }else if (secondes ==3){
                                        secondes = "0"+3;

                                    }else if (secondes ==4){
                                        secondes = "0"+4;

                                    }else if (secondes ==5){
                                        secondes = "0"+5;

                                    }else if (secondes ==6){
                                        secondes = "0"+6;

                                    }else if (secondes ==7){
                                        secondes = "0"+7;

                                    }else if (secondes ==8){
                                        secondes = "0"+8;

                                    }else if (secondes ==9){
                                        secondes = "0"+9;

                                    }else if (secondes ==0){
                                        secondes = "0"+0;

                                    }else{
                                        secondes = secondes;
                                    }
                                    
                                    var days = "0"+6;
                                    // nows11 = year+"-"+month+"-"+days;
                                     if (month == 1){
                                        var months = "0"+1;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    } else if (month == 2){
                                        var months = "0"+2;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 3){
                                        var months = "0"+3;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 4){
                                        var months = "0"+4;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 5){
                                        var months = "0"+5;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 6){
                                        var months = "0"+6;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 7){
                                        var months = "0"+7;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 8){
                                        var months = "0"+8;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 9){
                                        var months = "0"+9;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else {
                                        var months = month;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }
                                }else if (dayss == 7){

                                    if (hours ==1){
                                        hours = "0"+1;
                                    }else if (hours ==2){
                                        hours = "0"+2;

                                    }else if (hours ==3){
                                        hours = "0"+3;

                                    }else if (hours ==4){
                                        hours = "0"+4;

                                    }else if (hours ==5){
                                        hours = "0"+5;

                                    }else if (hours ==6){
                                        hours = "0"+6;

                                    }else if (hours ==7){
                                        hours = "0"+7;

                                    }else if (hours ==8){
                                        hours = "0"+8;

                                    }else if (hours ==9){
                                        hours = "0"+9;

                                    }else if (hours ==0){
                                        hours = "0"+0;

                                    }else{
                                        hours = hours;
                                    }



                                    if (minutes ==1){
                                        minutes = "0"+1;
                                    }else if (minutes ==2){
                                        minutes = "0"+2;

                                    }else if (minutes ==3){
                                        minutes = "0"+3;

                                    }else if (minutes ==4){
                                        minutes = "0"+4;

                                    }else if (minutes ==5){
                                        minutes = "0"+5;

                                    }else if (minutes ==6){
                                        minutes = "0"+6;

                                    }else if (minutes ==7){
                                        minutes = "0"+7;

                                    }else if (minutes ==8){
                                        minutes = "0"+8;

                                    }else if (minutes ==9){
                                        minutes = "0"+9;

                                    }else if (minutes ==0){
                                        minutes = "0"+0;

                                    }else{
                                        minutes = minutes;
                                    }

                                    

                                    if (secondes ==1){
                                        secondes = "0"+1;
                                    }else if (secondes ==2){
                                        secondes = "0"+2;

                                    }else if (secondes ==3){
                                        secondes = "0"+3;

                                    }else if (secondes ==4){
                                        secondes = "0"+4;

                                    }else if (secondes ==5){
                                        secondes = "0"+5;

                                    }else if (secondes ==6){
                                        secondes = "0"+6;

                                    }else if (secondes ==7){
                                        secondes = "0"+7;

                                    }else if (secondes ==8){
                                        secondes = "0"+8;

                                    }else if (secondes ==9){
                                        secondes = "0"+9;

                                    }else if (secondes ==0){
                                        secondes = "0"+0;

                                    }else{
                                        secondes = secondes;
                                    }
                                    
                                    var days = "0"+7;
                                    // nows11 = year+"-"+month+"-"+days;
                                     if (month == 1){
                                        var months = "0"+1;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    } else if (month == 2){
                                        var months = "0"+2;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 3){
                                        var months = "0"+3;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 4){
                                        var months = "0"+4;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 5){
                                        var months = "0"+5;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 6){
                                        var months = "0"+6;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 7){
                                        var months = "0"+7;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 8){
                                        var months = "0"+8;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 9){
                                        var months = "0"+9;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else {
                                        var months = month;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }
                                }else if (dayss == 8){
                                    var days = "0"+8;

                                    if (hours ==1){
                                        hours = "0"+1;
                                    }else if (hours ==2){
                                        hours = "0"+2;

                                    }else if (hours ==3){
                                        hours = "0"+3;

                                    }else if (hours ==4){
                                        hours = "0"+4;

                                    }else if (hours ==5){
                                        hours = "0"+5;

                                    }else if (hours ==6){
                                        hours = "0"+6;

                                    }else if (hours ==7){
                                        hours = "0"+7;

                                    }else if (hours ==8){
                                        hours = "0"+8;

                                    }else if (hours ==9){
                                        hours = "0"+9;

                                    }else if (hours ==0){
                                        hours = "0"+0;

                                    }else{
                                        hours = hours;
                                    }



                                    if (minutes ==1){
                                        minutes = "0"+1;
                                    }else if (minutes ==2){
                                        minutes = "0"+2;

                                    }else if (minutes ==3){
                                        minutes = "0"+3;

                                    }else if (minutes ==4){
                                        minutes = "0"+4;

                                    }else if (minutes ==5){
                                        minutes = "0"+5;

                                    }else if (minutes ==6){
                                        minutes = "0"+6;

                                    }else if (minutes ==7){
                                        minutes = "0"+7;

                                    }else if (minutes ==8){
                                        minutes = "0"+8;

                                    }else if (minutes ==9){
                                        minutes = "0"+9;

                                    }else if (minutes ==0){
                                        minutes = "0"+0;

                                    }else{
                                        minutes = minutes;
                                    }

                                    

                                    if (secondes ==1){
                                        secondes = "0"+1;
                                    }else if (secondes ==2){
                                        secondes = "0"+2;

                                    }else if (secondes ==3){
                                        secondes = "0"+3;

                                    }else if (secondes ==4){
                                        secondes = "0"+4;

                                    }else if (secondes ==5){
                                        secondes = "0"+5;

                                    }else if (secondes ==6){
                                        secondes = "0"+6;

                                    }else if (secondes ==7){
                                        secondes = "0"+7;

                                    }else if (secondes ==8){
                                        secondes = "0"+8;

                                    }else if (secondes ==9){
                                        secondes = "0"+9;

                                    }else if (secondes ==0){
                                        secondes = "0"+0;

                                    }else{
                                        secondes = secondes;
                                    }
                                    
                                    // nows11 = year+"-"+month+"-"+days;
                                     if (month == 1){
                                        var months = "0"+1;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    } else if (month == 2){
                                        var months = "0"+2;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 3){
                                        var months = "0"+3;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 4){
                                        var months = "0"+4;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 5){
                                        var months = "0"+5;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 6){
                                        var months = "0"+6;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 7){
                                        var months = "0"+7;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 8){
                                        var months = "0"+8;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 9){
                                        var months = "0"+9;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else {
                                        var months = month;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }
                                }else if (dayss == 9){
                                   
                                   if (hours ==1){
                                        hours = "0"+1;
                                    }else if (hours ==2){
                                        hours = "0"+2;

                                    }else if (hours ==3){
                                        hours = "0"+3;

                                    }else if (hours ==4){
                                        hours = "0"+4;

                                    }else if (hours ==5){
                                        hours = "0"+5;

                                    }else if (hours ==6){
                                        hours = "0"+6;

                                    }else if (hours ==7){
                                        hours = "0"+7;

                                    }else if (hours ==8){
                                        hours = "0"+8;

                                    }else if (hours ==9){
                                        hours = "0"+9;

                                    }else if (hours ==0){
                                        hours = "0"+0;

                                    }else{
                                        hours = hours;
                                    }



                                    if (minutes ==1){
                                        minutes = "0"+1;
                                    }else if (minutes ==2){
                                        minutes = "0"+2;

                                    }else if (minutes ==3){
                                        minutes = "0"+3;

                                    }else if (minutes ==4){
                                        minutes = "0"+4;

                                    }else if (minutes ==5){
                                        minutes = "0"+5;

                                    }else if (minutes ==6){
                                        minutes = "0"+6;

                                    }else if (minutes ==7){
                                        minutes = "0"+7;

                                    }else if (minutes ==8){
                                        minutes = "0"+8;

                                    }else if (minutes ==9){
                                        minutes = "0"+9;

                                    }else if (minutes ==0){
                                        minutes = "0"+0;

                                    }else{
                                        minutes = minutes;
                                    }

                                    

                                    if (secondes ==1){
                                        secondes = "0"+1;
                                    }else if (secondes ==2){
                                        secondes = "0"+2;

                                    }else if (secondes ==3){
                                        secondes = "0"+3;

                                    }else if (secondes ==4){
                                        secondes = "0"+4;

                                    }else if (secondes ==5){
                                        secondes = "0"+5;

                                    }else if (secondes ==6){
                                        secondes = "0"+6;

                                    }else if (secondes ==7){
                                        secondes = "0"+7;

                                    }else if (secondes ==8){
                                        secondes = "0"+8;

                                    }else if (secondes ==9){
                                        secondes = "0"+9;

                                    }else if (secondes ==0){
                                        secondes = "0"+0;

                                    }else{
                                        secondes = secondes;
                                    }
                                    
                                    var days = "0"+9;
                                    // nows11 = year+"-"+month+"-"+day;
                                     if (month == 1){
                                        var months = "0"+1;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    } else if (month == 2){
                                        var months = "0"+2;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 3){
                                        var months = "0"+3;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 4){
                                        var months = "0"+4;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 5){
                                        var months = "0"+5;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 6){
                                        var months = "0"+6;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 7){
                                        var months = "0"+7;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 8){
                                        var months = "0"+8;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 9){
                                        var months = "0"+9;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else {
                                        var months = month;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }
                                }else {
                                    var days = day;

                                    if (hours ==1){
                                        hours = "0"+1;
                                    }else if (hours ==2){
                                        hours = "0"+2;

                                    }else if (hours ==3){
                                        hours = "0"+3;

                                    }else if (hours ==4){
                                        hours = "0"+4;

                                    }else if (hours ==5){
                                        hours = "0"+5;

                                    }else if (hours ==6){
                                        hours = "0"+6;

                                    }else if (hours ==7){
                                        hours = "0"+7;

                                    }else if (hours ==8){
                                        hours = "0"+8;

                                    }else if (hours ==9){
                                        hours = "0"+9;

                                    }else if (hours ==0){
                                        hours = "0"+0;

                                    }else{
                                        hours = hours;
                                    }



                                    if (minutes ==1){
                                        minutes = "0"+1;
                                    }else if (minutes ==2){
                                        minutes = "0"+2;

                                    }else if (minutes ==3){
                                        minutes = "0"+3;

                                    }else if (minutes ==4){
                                        minutes = "0"+4;

                                    }else if (minutes ==5){
                                        minutes = "0"+5;

                                    }else if (minutes ==6){
                                        minutes = "0"+6;

                                    }else if (minutes ==7){
                                        minutes = "0"+7;

                                    }else if (minutes ==8){
                                        minutes = "0"+8;

                                    }else if (minutes ==9){
                                        minutes = "0"+9;

                                    }else if (minutes ==0){
                                        minutes = "0"+0;

                                    }else{
                                        minutes = minutes;
                                    }

                                    

                                    if (secondes ==1){
                                        secondes = "0"+1;
                                    }else if (secondes ==2){
                                        secondes = "0"+2;

                                    }else if (secondes ==3){
                                        secondes = "0"+3;

                                    }else if (secondes ==4){
                                        secondes = "0"+4;

                                    }else if (secondes ==5){
                                        secondes = "0"+5;

                                    }else if (secondes ==6){
                                        secondes = "0"+6;

                                    }else if (secondes ==7){
                                        secondes = "0"+7;

                                    }else if (secondes ==8){
                                        secondes = "0"+8;

                                    }else if (secondes ==9){
                                        secondes = "0"+9;

                                    }else if (secondes ==0){
                                        secondes = "0"+0;

                                    }else{
                                        secondes = secondes;
                                    }
                                    
                                    // nows11 = year+"-"+month+"-"+days;
                                     if (month == 1){
                                        var months = "0"+1;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    } else if (month == 2){
                                        var months = "0"+2;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 3){
                                        var months = "0"+3;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 4){
                                        var months = "0"+4;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 5){
                                        var months = "0"+5;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 6){
                                        var months = "0"+6;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 7){
                                        var months = "0"+7;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 8){
                                        var months = "0"+8;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else if (month == 9){
                                        var months = "0"+9;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }else {
                                        var months = month;
                                        nows11 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                    }
                                }

                        

                                con.connect(function(err) {

                                    var sql0008 = "INSERT INTO users_statisque (id, date_heure, idUser_id) VALUES ('?','"+nows11+"','"+result[0].id+"')";

                                    con.query(sql0008, function (err, result) {
                                        if (err) throw err;
                                        // alert(sql0008);
                                        console.log(" COOL ");
                                        //alert(" COOL ");
                                    });

                                });












                        if (day == 1) {

                            var days = "0" + 1;

                            if (month == 1) {
                                var months = "0" + 1;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 2) {
                                var months = "0" + 2;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 3) {
                                var months = "0" + 3;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 4) {
                                var months = "0" + 4;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 5) {
                                var months = "0" + 5;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 6) {
                                var months = "0" + 6;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 7) {
                                var months = "0" + 7;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 8) {
                                var months = "0" + 8;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 9) {
                                var months = "0" + 9;
                                nows = year + "-" + months+ "-" + days;
                            } else {
                                var months = month;
                                nows = year + "-" + months + "-" + days;
                            }

                            // nows = year+"-"+month+"-"+days;
                        } else if (day == 2) {

                            var days = "0" + 2;
                            if (month == 1) {
                                var months = "0" + 1;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 2) {
                                var months = "0" + 2;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 3) {
                                var months = "0" + 3;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 4) {
                                var months = "0" + 4;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 5) {
                                var months = "0" + 5;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 6) {
                                var months = "0" + 6;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 7) {
                                var months = "0" + 7;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 8) {
                                var months = "0" + 8;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 9) {
                                var months = "0" + 9;
                                nows = year + "-" + months + "-" + days;
                            } else {
                                var months = month;
                                nows = year + "-" + months + "-" + days;
                            }
                            // nows = year+"-"+month+"-"+days;
                        } else if (day == 3) {

                            var days = "0" + 3;
                            if (month == 1) {
                                var months = "0" + 1;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 2) {
                                var months = "0" + 2;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 3) {
                                var months = "0" + 3;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 4) {
                                var months = "0" + 4;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 5) {
                                var months = "0" + 5;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 6) {
                                var months = "0" + 6;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 7) {
                                var months = "0" + 7;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 8) {
                                var months = "0" + 8;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 9) {
                                var months = "0" + 9;
                                nows = year + "-" + months + "-" + days;
                            } else {
                                var months = month;
                                nows = year + "-" + months + "-" + days;
                            }
                            // nows = year+"-"+month+"-"+days;
                        } else if (day == 4) {

                            var days = "0" + 4;
                            if (month == 1) {
                                var months = "0" + 1;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 2) {
                                var months = "0" + 2;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 3) {
                                var months = "0" + 3;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 4) {
                                var months = "0" + 4;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 5) {
                                var months = "0" + 5;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 6) {
                                var months = "0" + 6;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 7) {
                                var months = "0" + 7;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 8) {
                                var months = "0" + 8;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 9) {
                                var months = "0" + 9;
                                nows = year + "-" + months + "-" + days;
                            } else {
                                var months = month;
                                nows = year + "-" + months + "-" + days;
                            }
                            // nows = year+"-"+month+"-"+days;
                        } else if (day == 5) {

                            var days = "0" + 5;
                            if (month == 1) {
                                var months = "0" + 1;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 2) {
                                var months = "0" + 2;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 3) {
                                var months = "0" + 3;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 4) {
                                var months = "0" + 4;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 5) {
                                var months = "0" + 5;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 6) {
                                var months = "0" + 6;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 7) {
                                var months = "0" + 7;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 8) {
                                var months = "0" + 8;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 9) {
                                var months = "0" + 9;
                                nows = year + "-" + months + "-" + days;
                            } else {
                                var months = month;
                                nows = year + "-" + months + "-" + days;
                            }
                            // nows = year+"-"+month+"-"+days;
                        } else if (day == 6) {

                            var days = "0" + 6;
                            if (month == 1) {
                                var months = "0" + 1;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 2) {
                                var months = "0" + 2;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 3) {
                                var months = "0" + 3;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 4) {
                                var months = "0" + 4;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 5) {
                                var months = "0" + 5;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 6) {
                                var months = "0" + 6;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 7) {
                                var months = "0" + 7;
                                nows = year + "-" + monthss + "-" + days;
                            } else if (month == 8) {
                                var months = "0" + 8;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 9) {
                                var months = "0" + 9;
                                nows = year + "-" + months + "-" + days;
                            } else {
                                var months = month;
                                nows = year + "-" + months + "-" + days;
                            }
                            // nows = year+"-"+month+"-"+days;
                        } else if (day == 7) {

                            var days = "0" + 7;
                            if (month == 1) {
                                var months = "0" + 1;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 2) {
                                var months = "0" + 2;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 3) {
                                var months = "0" + 3;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 4) {
                                var months = "0" + 4;
                                nows = year + "-" + months+ "-" + days;
                            } else if (month == 5) {
                                var months = "0" + 5;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 6) {
                                var months = "0" + 6;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 7) {
                                var months = "0" + 7;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 8) {
                                var months = "0" + 8;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 9) {
                                var months = "0" + 9;
                                nows = year + "-" + months + "-" + days;
                            } else {
                                var months = month;
                                nows = year + "-" + months + "-" + days;
                            }
                            // nows = year+"-"+month+"-"+days;
                        } else if (day == 8) {

                            var days = "0" + 8;
                            if (month == 1) {
                                var months = "0" + 1;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 2) {
                                var months = "0" + 2;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 3) {
                                var months = "0" + 3;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 4) {
                                var months = "0" + 4;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 5) {
                                var months = "0" + 5;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 6) {
                                var months = "0" + 6;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 7) {
                                var months = "0" + 7;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 8) {
                                var months = "0" + 8;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 9) {
                                var months = "0" + 9;
                                nows = year + "-" + months + "-" + days;
                            } else {
                                var months = month;
                                nows = year + "-" + months + "-" + days;
                            }
                            // nows = year+"-"+month+"-"+days;
                        } else if (day == 9) {

                            var days = "0" + 9;
                            if (month == 1) {
                                var months = "0" + 1;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 2) {
                                var months = "0" + 2;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 3) {
                                var months = "0" + 3;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 4) {
                                var months = "0" + 4;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 5) {
                                var months = "0" + 5;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 6) {
                                var months = "0" + 6;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 7) {
                                var months = "0" + 7;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 8) {
                                var months = "0" + 8;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 9) {
                                var months = "0" + 9;
                                nows = year + "-" + months + "-" + days;
                            } else {
                                var months = month;
                                nows = year + "-" + months + "-" + days;
                            }
                            // nows = year+"-"+month+"-"+day;
                        } else {

                            var days = day;
                            if (month == 1) {
                                var months = "0" + 1;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 2) {
                                var months = "0" + 2;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 3) {
                                var months = "0" + 3;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 4) {
                                var months = "0" + 4;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 5) {
                                var months = "0" + 5;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 6) {
                                var months = "0" + 6;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 7) {
                                var months = "0" + 7;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 8) {
                                var months = "0" + 8;
                                nows = year + "-" + months + "-" + days;
                            } else if (month == 9) {
                                var months = "0" + 9;
                                nows = year + "-" + months + "-" + days;
                            } else {
                                var months = month;
                                nows = year + "-" + months + "-" + days;
                            }
                            // nows = year+"-"+month+"-"+days;
                        }

                        con.connect(function(err) {

                            var sql0007 = "UPDATE users_paiement SET datebadge ='"+nows+"' WHERE users_paiement.idPaiement="+result[0].idPaiement;

                            con.query(sql0007, function (err, result) {
                                if (err) throw err;
                                console.log(" COOL ");
                                // alert(" COOL ");
                            });

                        });



                                   
                        





                        if (result[0].id_typeabonnement == 18 && result[0].date_fin >= nows) {

                            // alert("COOOL  1");

                            var ladate = new Date();
                            var tab_jour = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");

                            if (tab_jour[ladate.getDay()] == "Lundi" && (ladate.getHours() >= 6) && (ladate.getHours() <= 14)) {


                                soundManager.soundManager.setup({
                                    // where to find flash audio SWFs, as needed
                                    //url: '/path/to/swf-files/',
                                    onready: function() {
                                        console.log("  SM2 is ready . play audio!");
                                        var fooSound0 = soundManager.soundManager.createSound({
                                            url: '../foo.mp3',
                                            onfinish: function() {
                                                document.location.href = "../pages/forms_valide.html?nom=" + result[0].nom + "&prenom=" + result[0].prenom + "&dateNaiss=" + result[0].dateNaiss + "&profession=" + result[0].profession + "&idUser=" + result[0].id + "&idPaiement=" + result[0].idPaiement + "&date_debut=" + result[0].date_debut + "&date_fin=" + result[0].date_fin + "&nbseances_total=" + result[0].nbseances_total + "&nbseances_en_cours=" + result[0].nbseances_en_cours + "&dateencours=" + result[0].dateencours + "&civilite=" + result[0].civilite + "&id_typeabonnement=" + result[0].id_typeabonnement + "&photo=" + result[0].photo + "&date_autorisation=" + result[0].date_autorisation+ "&email=" + result[0].email;
                                            }
                                        });
                                        fooSound0.play();

                                    }
                                });

                                c = "";
                                b = "";

                            } else if (tab_jour[ladate.getDay()] == "Mardi" && (ladate.getHours() >= 6) && (ladate.getHours() <= 14)) {

                                soundManager.soundManager.setup({
                                    // where to find flash audio SWFs, as needed
                                    //url: '/path/to/swf-files/',
                                    onready: function() {
                                        console.log("  SM2 is ready . play audio!");
                                        var fooSound0 = soundManager.soundManager.createSound({
                                            url: '../foo.mp3',
                                            onfinish: function() {
                                                document.location.href = "../pages/forms_valide.html?nom=" + result[0].nom + "&prenom=" + result[0].prenom + "&dateNaiss=" + result[0].dateNaiss + "&profession=" + result[0].profession + "&idUser=" + result[0].id + "&idPaiement=" + result[0].idPaiement + "&date_debut=" + result[0].date_debut + "&date_fin=" + result[0].date_fin + "&nbseances_total=" + result[0].nbseances_total + "&nbseances_en_cours=" + result[0].nbseances_en_cours + "&dateencours=" + result[0].dateencours + "&civilite=" + result[0].civilite + "&id_typeabonnement=" + result[0].id_typeabonnement + "&photo=" + result[0].photo + "&date_autorisation=" + result[0].date_autorisation+ "&email=" + result[0].email;

                                            }
                                        });
                                        fooSound0.play();

                                    }
                                });

                                c = "";
                                b = "";

                            } else if (tab_jour[ladate.getDay()] == "Mercredi" && (ladate.getHours() >= 6) && (ladate.getHours() <= 14)) {

                                soundManager.soundManager.setup({
                                    // where to find flash audio SWFs, as needed
                                    //url: '/path/to/swf-files/',
                                    onready: function() {
                                        console.log("  SM2 is ready . play audio!");
                                        var fooSound0 = soundManager.soundManager.createSound({
                                            url: '../foo.mp3',
                                            onfinish: function() {
                                                document.location.href = "../pages/forms_valide.html?nom=" + result[0].nom + "&prenom=" + result[0].prenom + "&dateNaiss=" + result[0].dateNaiss + "&profession=" + result[0].profession + "&idUser=" + result[0].id + "&idPaiement=" + result[0].idPaiement + "&date_debut=" + result[0].date_debut + "&date_fin=" + result[0].date_fin + "&nbseances_total=" + result[0].nbseances_total + "&nbseances_en_cours=" + result[0].nbseances_en_cours + "&dateencours=" + result[0].dateencours + "&civilite=" + result[0].civilite + "&id_typeabonnement=" + result[0].id_typeabonnement + "&photo=" + result[0].photo + "&date_autorisation=" + result[0].date_autorisation+ "&email=" + result[0].email;

                                            }
                                        });
                                        fooSound0.play();

                                    }
                                });

                                c = "";
                                b = "";

                            } else if (tab_jour[ladate.getDay()] == "Jeudi" && (ladate.getHours() >= 6) && (ladate.getHours() <= 14)) {


                                soundManager.soundManager.setup({
                                    // where to find flash audio SWFs, as needed
                                    //url: '/path/to/swf-files/',
                                    onready: function() {
                                        console.log("  SM2 is ready . play audio!");
                                        var fooSound0 = soundManager.soundManager.createSound({
                                            url: '../foo.mp3',
                                            onfinish: function() {
                                                document.location.href = "../pages/forms_valide.html?nom=" + result[0].nom + "&prenom=" + result[0].prenom + "&dateNaiss=" + result[0].dateNaiss + "&profession=" + result[0].profession + "&idUser=" + result[0].id + "&idPaiement=" + result[0].idPaiement + "&date_debut=" + result[0].date_debut + "&date_fin=" + result[0].date_fin + "&nbseances_total=" + result[0].nbseances_total + "&nbseances_en_cours=" + result[0].nbseances_en_cours + "&dateencours=" + result[0].dateencours + "&civilite=" + result[0].civilite + "&id_typeabonnement=" + result[0].id_typeabonnement + "&photo=" + result[0].photo + "&date_autorisation=" + result[0].date_autorisation+ "&email=" + result[0].email;

                                            }
                                        });
                                        fooSound0.play();

                                    }
                                });

                                c = "";
                                b = "";

                            } else if (tab_jour[ladate.getDay()] == "Vendredi" && (ladate.getHours() >= 6) && (ladate.getHours() <= 14)) {


                                soundManager.soundManager.setup({
                                    // where to find flash audio SWFs, as needed
                                    //url: '/path/to/swf-files/',
                                    onready: function() {
                                        console.log("  SM2 is ready . play audio!");
                                        var fooSound0 = soundManager.soundManager.createSound({
                                            url: '../foo.mp3',
                                            onfinish: function() {
                                                document.location.href = "../pages/forms_valide.html?nom=" + result[0].nom + "&prenom=" + result[0].prenom + "&dateNaiss=" + result[0].dateNaiss + "&profession=" + result[0].profession + "&idUser=" + result[0].id + "&idPaiement=" + result[0].idPaiement + "&date_debut=" + result[0].date_debut + "&date_fin=" + result[0].date_fin + "&nbseances_total=" + result[0].nbseances_total + "&nbseances_en_cours=" + result[0].nbseances_en_cours + "&dateencours=" + result[0].dateencours + "&civilite=" + result[0].civilite + "&id_typeabonnement=" + result[0].id_typeabonnement + "&photo=" + result[0].photo + "&date_autorisation=" + result[0].date_autorisation+ "&email=" + result[0].email;

                                            }
                                        });
                                        fooSound0.play();

                                    }
                                });

                                c = "";
                                b = "";

                            } else if (tab_jour[ladate.getDay()] == "Samedi") {

                                soundManager.soundManager.setup({
                                    // where to find flash audio SWFs, as needed
                                    //url: '/path/to/swf-files/',
                                    onready: function() {
                                        console.log("  SM2 is ready . play audio!");
                                        var fooSound0 = soundManager.soundManager.createSound({
                                            url: '../foo.mp3',
                                            onfinish: function() {
                                                document.location.href = "../pages/forms_valide.html?nom=" + result[0].nom + "&prenom=" + result[0].prenom + "&dateNaiss=" + result[0].dateNaiss + "&profession=" + result[0].profession + "&idUser=" + result[0].id + "&idPaiement=" + result[0].idPaiement + "&date_debut=" + result[0].date_debut + "&date_fin=" + result[0].date_fin + "&nbseances_total=" + result[0].nbseances_total + "&nbseances_en_cours=" + result[0].nbseances_en_cours + "&dateencours=" + result[0].dateencours + "&civilite=" + result[0].civilite + "&id_typeabonnement=" + result[0].id_typeabonnement + "&photo=" + result[0].photo + "&date_autorisation=" + result[0].date_autorisation+ "&email=" + result[0].email;

                                            }
                                        });
                                        fooSound0.play();

                                    }
                                });

                                c = "";
                                b = "";

                            } else if (tab_jour[ladate.getDay()] == "Dimanche") {
                                soundManager.soundManager.setup({
                                    // where to find flash audio SWFs, as needed
                                    //url: '/path/to/swf-files/',
                                    onready: function() {
                                        console.log("  SM2 is ready . play audio!");
                                        var fooSound0 = soundManager.soundManager.createSound({
                                            url: '../foo.mp3',
                                            onfinish: function() {
                                                document.location.href = "../pages/forms_valide.html?nom=" + result[0].nom + "&prenom=" + result[0].prenom + "&dateNaiss=" + result[0].dateNaiss + "&profession=" + result[0].profession + "&idUser=" + result[0].id + "&idPaiement=" + result[0].idPaiement + "&date_debut=" + result[0].date_debut + "&date_fin=" + result[0].date_fin + "&nbseances_total=" + result[0].nbseances_total + "&nbseances_en_cours=" + result[0].nbseances_en_cours + "&dateencours=" + result[0].dateencours + "&civilite=" + result[0].civilite + "&id_typeabonnement=" + result[0].id_typeabonnement + "&photo=" + result[0].photo + "&date_autorisation=" + result[0].date_autorisation+ "&email=" + result[0].email;

                                            }
                                        });
                                        fooSound0.play();

                                    }
                                });

                                c = "";
                                b = "";
                            } else {

                                soundManager.soundManager.setup({
                                    // where to find flash audio SWFs, as needed
                                    //url: '/path/to/swf-files/',
                                    onready: function() {
                                        console.log("  SM2 is ready . play audio!");
                                        var fooSound2 = soundManager.soundManager.createSound({
                                            url: '../faux.mp3',
                                            onfinish: function() {
                                                document.location.href = "../pages/forms_invalide.html?nom=" + result[0].nom + "&prenom=" + result[0].prenom + "&dateNaiss=" + result[0].dateNaiss + "&profession=" + result[0].profession + "&idUser=" + result[0].id + "&idPaiement=" + result[0].idPaiement + "&date_debut=" + result[0].date_debut + "&date_fin=" + result[0].date_fin + "&nbseances_total=" + result[0].nbseances_total + "&nbseances_en_cours=" + result[0].nbseances_en_cours + "&dateencours=" + result[0].dateencours + "&civilite=" + result[0].civilite + "&id_typeabonnement=" + result[0].id_typeabonnement + "&photo=" + result[0].photo + "&date_autorisation=" + result[0].date_autorisation+ "&email=" + result[0].email;

                                            }
                                        });
                                        fooSound2.play();

                                    }
                                });

                                c = "";
                                b = "";


                            }
                            // alert(" COOL 2222 ");


                        } else if (result[0].id_typeabonnement == 18 && result[0].date_fin < nows) {


                            //alert("COOOL  2");

                            soundManager.soundManager.setup({
                                // where to find flash audio SWFs, as needed
                                //url: '/path/to/swf-files/',
                                onready: function() {
                                    console.log("  SM2 is ready . play audio!");
                                    var fooSound2 = soundManager.soundManager.createSound({
                                        url: '../faux.mp3',
                                        onfinish: function() {
                                            document.location.href = "../pages/forms_invalide.html?nom=" + result[0].nom + "&prenom=" + result[0].prenom + "&dateNaiss=" + result[0].dateNaiss + "&profession=" + result[0].profession + "&idUser=" + result[0].id + "&idPaiement=" + result[0].idPaiement + "&date_debut=" + result[0].date_debut + "&date_fin=" + result[0].date_fin + "&nbseances_total=" + result[0].nbseances_total + "&nbseances_en_cours=" + result[0].nbseances_en_cours + "&dateencours=" + result[0].dateencours + "&civilite=" + result[0].civilite + "&id_typeabonnement=" + result[0].id_typeabonnement + "&photo=" + result[0].photo + "&date_autorisation=" + result[0].date_autorisation+ "&email=" + result[0].email;

                                        }
                                    });
                                    fooSound2.play();

                                }
                            });

                            c = "";
                            b = "";
                            // alert(" COOL 11111 ");



                        } else if (result[0].date_fin < nows && result[0].date_fin != "" && result[0].nbseances_total==0) {
                        // Ancien code } else if (result[0].date_fin < nows && result[0].date_fin != "") {
                        
                        //alert("Trop cool  ");

                        //alert("La valeur de la date de fin => "+result[0].date_fin);
                        //alert("La valeur de la date actuelle => "+nows);



                            // else if (result[0].date_fin < nows ){

                            console.log("  COOLL 00000000 111111");



                            soundManager.soundManager.setup({
                                // where to find flash audio SWFs, as needed
                                //url: '/path/to/swf-files/',
                                onready: function() {
                                    console.log("  SM2 is ready . play audio!");
                                    var fooSound1 = soundManager.soundManager.createSound({
                                        url: '../faux.mp3',
                                        onfinish: function() {
                                            document.location.href = "../pages/forms_invalide.html?nom=" + result[0].nom + "&prenom=" + result[0].prenom + "&dateNaiss=" + result[0].dateNaiss + "&profession=" + result[0].profession + "&idUser=" + result[0].id + "&idPaiement=" + result[0].idPaiement + "&date_debut=" + result[0].date_debut + "&date_fin=" + result[0].date_fin + "&nbseances_total=" + result[0].nbseances_total + "&nbseances_en_cours=" + result[0].nbseances_en_cours + "&dateencours=" + result[0].dateencours + "&civilite=" + result[0].civilite + "&id_typeabonnement=" + result[0].id_typeabonnement + "&photo=" + result[0].photo + "&date_autorisation=" + result[0].date_autorisation+ "&email=" + result[0].email;

                                        }

                                    });
                                    fooSound1.play();
                                    // document.location.href="../pages/forms_invalide.html?nom="+result[0].nom+"&prenom="+result[0].prenom+"&dateNaiss="+result[0].dateNaiss+"&profession="+result[0].profession+"&idUser="+result[0].id+"&idPaiement="+result[0].idPaiement+"&date_debut="+result[0].date_debut+"&date_fin="+result[0].date_fin+"&nbseances_total="+result[0].nbseances_total+"&nbseances_en_cours="+result[0].nbseances_en_cours+"&dateencours="+result[0].dateencours+"&civilite="+result[0].civilite+"&id_typeabonnement="+result[0].id_typeabonnement+"&photo="+result[0].photo;


                                }
                            });
                            // });




                            c = "";
                            b = "";

                            ////////////// document.location.href="../pages/forms_invalide.html?nom="+result[0].nom+"&prenom="+result[0].prenom+"&dateNaiss="+result[0].dateNaiss+"&profession="+result[0].profession+"&idUser="+result[0].id+"&idPaiement="+result[0].idPaiement+"&date_debut="+result[0].date_debut+"&date_fin="+result[0].date_fin+"&nbseances_total="+result[0].nbseances_total+"&nbseances_en_cours="+result[0].nbseances_en_cours+"&dateencours="+result[0].dateencours+"&civilite="+result[0].civilite+"&id_typeabonnement="+result[0].id_typeabonnement+"&photo="+result[0].photo;
                            // alert(" COOL 00000 ");



                        } else if (result[0].nbseances_total > 0 ) {

                            console.log("  COOLL 00000000 ");

                            // alert(" COOL Cest bon ");



                            if (day == 1) {

                                var days = "0" + 1;

                                if (month == 1) {
                                    var months = "0" + 1;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 2) {
                                    var months = "0" + 2;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 3) {
                                    var months = "0" + 3;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 4) {
                                    var months = "0" + 4;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 5) {
                                    var months = "0" + 5;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 6) {
                                    var months = "0" + 6;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 7) {
                                    var months = "0" + 7;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 8) {
                                    var months = "0" + 8;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 9) {
                                    var months = "0" + 9;
                                    nows = year + "-" + months + "-" + days;
                                } else {
                                    var months = month;
                                    nows = year + "-" + months + "-" + days;
                                }

                                // nows = year+"-"+month+"-"+days;
                            } else if (day == 2) {

                                var days = "0" + 2;
                                if (month == 1) {
                                    var months = "0" + 1;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 2) {
                                    var months = "0" + 2;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 3) {
                                    var months = "0" + 3;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 4) {
                                    var months = "0" + 4;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 5) {
                                    var months = "0" + 5;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 6) {
                                    var months = "0" + 6;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 7) {
                                    var months = "0" + 7;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 8) {
                                    var months = "0" + 8;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 9) {
                                    var months = "0" + 9;
                                    nows = year + "-" + months + "-" + days;
                                } else {
                                    var months = month;
                                    nows = year + "-" + months + "-" + days;
                                }
                                // nows = year+"-"+month+"-"+days;
                            } else if (day == 3) {

                                var days = "0" + 3;
                                if (month == 1) {
                                    var months = "0" + 1;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 2) {
                                    var months = "0" + 2;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 3) {
                                    var months = "0" + 3;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 4) {
                                    var months = "0" + 4;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 5) {
                                    var months = "0" + 5;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 6) {
                                    var months = "0" + 6;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 7) {
                                    var months = "0" + 7;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 8) {
                                    var months = "0" + 8;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 9) {
                                    var months = "0" + 9;
                                    nows = year + "-" + months + "-" + days;
                                } else {
                                    var months = month;
                                    nows = year + "-" + months + "-" + days;
                                }
                                // nows = year+"-"+month+"-"+days;
                            } else if (day == 4) {

                                var days = "0" + 4;
                                if (month == 1) {
                                    var months = "0" + 1;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 2) {
                                    var months = "0" + 2;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 3) {
                                    var months = "0" + 3;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 4) {
                                    var months = "0" + 4;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 5) {
                                    var months = "0" + 5;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 6) {
                                    var months = "0" + 6;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 7) {
                                    var months = "0" + 7;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 8) {
                                    var months = "0" + 8;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 9) {
                                    var months = "0" + 9;
                                    nows = year + "-" + months + "-" + days;
                                } else {
                                    var months = month;
                                    nows = year + "-" + months + "-" + days;
                                }
                                // nows = year+"-"+month+"-"+days;
                            } else if (day == 5) {

                                var days = "0" + 5;
                                if (month == 1) {
                                    var months = "0" + 1;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 2) {
                                    var months = "0" + 2;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 3) {
                                    var months = "0" + 3;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 4) {
                                    var months = "0" + 4;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 5) {
                                    var months = "0" + 5;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 6) {
                                    var months = "0" + 6;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 7) {
                                    var months = "0" + 7;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 8) {
                                    var months = "0" + 8;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 9) {
                                    var months = "0" + 9;
                                    nows = year + "-" + months + "-" + days;
                                } else {
                                    var months = month;
                                    nows = year + "-" + months + "-" + days;
                                }
                                // nows = year+"-"+month+"-"+days;
                            } else if (day == 6) {

                                var days = "0" + 6;
                                if (month == 1) {
                                    var months = "0" + 1;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 2) {
                                    var months = "0" + 2;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 3) {
                                    var months = "0" + 3;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 4) {
                                    var months = "0" + 4;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 5) {
                                    var months = "0" + 5;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 6) {
                                    var months = "0" + 6;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 7) {
                                    var months = "0" + 7;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 8) {
                                    var months = "0" + 8;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 9) {
                                    var months = "0" + 9;
                                    nows = year + "-" + months + "-" + days;
                                } else {
                                    var months = month;
                                    nows = year + "-" + months + "-" + days;
                                }
                                // nows = year+"-"+month+"-"+days;
                            } else if (day == 7) {

                                var days = "0" + 7;
                                if (month == 1) {
                                    var months = "0" + 1;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 2) {
                                    var months = "0" + 2;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 3) {
                                    var months = "0" + 3;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 4) {
                                    var months = "0" + 4;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 5) {
                                    var months = "0" + 5;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 6) {
                                    var months = "0" + 6;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 7) {
                                    var months = "0" + 7;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 8) {
                                    var months = "0" + 8;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 9) {
                                    var months = "0" + 9;
                                    nows = year + "-" + months + "-" + days;
                                } else {
                                    var months = month;
                                    nows = year + "-" + months + "-" + days;
                                }
                                // nows = year+"-"+month+"-"+days;
                            } else if (day == 8) {

                                var days = "0" + 8;
                                if (month == 1) {
                                    var months = "0" + 1;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 2) {
                                    var months = "0" + 2;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 3) {
                                    var months = "0" + 3;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 4) {
                                    var months = "0" + 4;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 5) {
                                    var months = "0" + 5;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 6) {
                                    var months = "0" + 6;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 7) {
                                    var months = "0" + 7;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 8) {
                                    var months = "0" + 8;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 9) {
                                    var months = "0" + 9;
                                    nows = year + "-" + months + "-" + days;
                                } else {
                                    var months = month;
                                    nows = year + "-" + months + "-" + days;
                                }
                                // nows = year+"-"+month+"-"+days;
                            } else if (day == 9) {

                                var days = "0" + 9;
                                if (month == 1) {
                                    var months = "0" + 1;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 2) {
                                    var months = "0" + 2;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 3) {
                                    var months = "0" + 3;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 4) {
                                    var months = "0" + 4;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 5) {
                                    var months = "0" + 5;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 6) {
                                    var months = "0" + 6;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 7) {
                                    var months = "0" + 7;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 8) {
                                    var months = "0" + 8;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 9) {
                                    var months = "0" + 9;
                                    nows = year + "-" + months + "-" + days;
                                } else {
                                    var months = month;
                                    nows = year + "-" + months + "-" + days;
                                }
                                // nows = year+"-"+month+"-"+day;
                            } else {

                                var days = day;
                                if (month == 1) {
                                    var months = "0" + 1;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 2) {
                                    var months = "0" + 2;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 3) {
                                    var months = "0" + 3;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 4) {
                                    var months = "0" + 4;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 5) {
                                    var months = "0" + 5;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 6) {
                                    var months = "0" + 6;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 7) {
                                    var months = "0" + 7;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 8) {
                                    var months = "0" + 8;
                                    nows = year + "-" + months + "-" + days;
                                } else if (month == 9) {
                                    var months = "0" + 9;
                                    nows = year + "-" + months + "-" + days;
                                } else {
                                    var months = month;
                                    nows = year + "-" + months + "-" + days;
                                }
                                // nows = year+"-"+month+"-"+days;
                            }

                            if (result[0].nbseances_total >= result[0].nbseances_en_cours & result[0].dateencours == nows) {
                                console.log(" COOL 222222 ");
                                console.log(" COOL 222222 ");

                                
                                // var player = require('play-sound')({player: "C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Lecteur Windows Media.exe"})

                                //  var player = require('play-sound')(opts = {})


                                // alert("COOL 1 ");

                                soundManager.soundManager.setup({
                                    // where to find flash audio SWFs, as needed
                                    //url: '/path/to/swf-files/',
                                    onready: function() {
                                        console.log("  SM2 is ready . play audio!");
                                        var fooSound = soundManager.soundManager.createSound({
                                            url: '../foo.mp3',
                                            onfinish: function() {
                                                document.location.href = "../pages/forms_valide.html?nom=" + result[0].nom + "&prenom=" + result[0].prenom + "&dateNaiss=" + result[0].dateNaiss + "&profession=" + result[0].profession + "&idUser=" + result[0].id + "&idPaiement=" + result[0].idPaiement + "&date_debut=" + result[0].date_debut + "&date_fin=" + result[0].date_fin + "&nbseances_total=" + result[0].nbseances_total + "&nbseances_en_cours=" + result[0].nbseances_en_cours + "&dateencours=" + result[0].dateencours + "&civilite=" + result[0].civilite + "&id_typeabonnement=" + result[0].id_typeabonnement + "&photo=" + result[0].photo + "&date_autorisation=" + result[0].date_autorisation+ "&email=" + result[0].email;

                                            }
                                        });
                                        fooSound.play();

                                    }
                                });

                                c = "";
                                b = "";



                            } else if (result[0].nbseances_total >= result[0].nbseances_en_cours & result[0].dateencours != nows) {
                                console.log(" NON COOL 3333 ");

                                // alert("COOL 2 ");


                                con.connect(function(err) {
                                    console.log("coolllll1111");
                                    console.log(result[0]);
                                    // if (err) throw err;
                                    console.log("Connected!");
                                    var dd = " ";
                                    var df = " ";
                                    var valeur_actuelss = parseInt(result[0].nbseances_en_cours) + 1;
                                    // alert(" Valeur en cours "+valeur_actuelss);
                                    console.log(" La valeur de Nb senaces en cours " + parseInt(result[0].nbseances_en_cours) + 1);
                                    var idpaiement = result[0].idPaiement;
                                    console.log(" La valeur de l' ID PAIEMENT est " + idpaiement);

                                    var sql33 = "UPDATE users_paiement SET date_debut='" + dd + "', date_fin='" + df + "', nbseances_en_cours='" + valeur_actuelss + "', dateencours='" + nows + "' WHERE users_paiement.idPaiement="+idpaiement;

                                    // var sql3 = "UPDATE paiement (idPaiement, date_debut, date_fin, idUser, nbseances_total, nbseances_en_cours, dateencours) VALUES ('?', '"+dd+"','"+df+"','"+result[0].idUser+"','"+result[0].nbseances_total+"','"+valeur_actuel+"','"+nows+"')";

                                    console.log(sql33);
                                    con.query(sql33, function(err, result) {
                                        // if (err) throw err;
                                        console.log("1 record inserted");

                                    });


                                });

                                soundManager.soundManager.setup({
                                    // where to find flash audio SWFs, as needed
                                    //url: '/path/to/swf-files/',
                                    onready: function() {
                                        console.log("  SM2 is ready . play audio!");
                                        var fooSound01 = soundManager.soundManager.createSound({
                                            url: '../foo.mp3',
                                            onfinish: function() {
                                                document.location.href = "../pages/forms_valide.html?nom=" + result[0].nom + "&prenom=" + result[0].prenom + "&dateNaiss=" + result[0].dateNaiss + "&profession=" + result[0].profession + "&idUser=" + result[0].id + "&idPaiement=" + result[0].idPaiement + "&date_debut=" + result[0].date_debut + "&date_fin=" + result[0].date_fin + "&nbseances_total=" + result[0].nbseances_total + "&nbseances_en_cours=" + result[0].nbseances_en_cours + "&dateencours=" + result[0].dateencours + "&civilite=" + result[0].civilite + "&id_typeabonnement=" + result[0].id_typeabonnement + "&photo=" + result[0].photo + "&date_autorisation=" + result[0].date_autorisation+ "&email=" + result[0].email;

                                            }
                                        });
                                        fooSound01.play();

                                    }
                                });


                                // });

                                c = "";
                                b = "";


                            } else if (result[0].nbseances_total == result[0].nbseances_en_cours) {

                                console.log(" COOL 222222 ");

                                // alert("COOL 3 ");


                                // var player = require('play-sound')(opts = {})




                                soundManager.soundManager.setup({
                                    // where to find flash audio SWFs, as needed
                                    //url: '/path/to/swf-files/',
                                    onready: function() {
                                        console.log("  SM2 is ready . play audio!");
                                        var fooSound2 = soundManager.soundManager.createSound({
                                            url: '../faux.mp3',
                                            onfinish: function() {
                                                document.location.href = "../pages/forms_invalide.html?nom=" + result[0].nom + "&prenom=" + result[0].prenom + "&dateNaiss=" + result[0].dateNaiss + "&profession=" + result[0].profession + "&idUser=" + result[0].id + "&idPaiement=" + result[0].idPaiement + "&date_debut=" + result[0].date_debut + "&date_fin=" + result[0].date_fin + "&nbseances_total=" + result[0].nbseances_total + "&nbseances_en_cours=" + result[0].nbseances_en_cours + "&dateencours=" + result[0].dateencours + "&civilite=" + result[0].civilite + "&id_typeabonnement=" + result[0].id_typeabonnement + "&photo=" + result[0].photo + "&date_autorisation=" + result[0].date_autorisation+ "&email=" + result[0].email;

                                            }
                                        });
                                        fooSound2.play();

                                    }
                                });

                                c = "";
                                b = "";

                            } else if (result[0].nbseances_total < result[0].nbseances_en_cours) {

                                console.log(" COOL 222222 ");



                                // var player = require('play-sound')(opts = {})


                                // alert("COOL 4 ");


                                soundManager.soundManager.setup({
                                    // where to find flash audio SWFs, as needed
                                    //url: '/path/to/swf-files/',
                                    onready: function() {
                                        console.log("  SM2 is ready . play audio!");
                                        var fooSound2 = soundManager.soundManager.createSound({
                                            url: '../faux.mp3',
                                            onfinish: function() {
                                                document.location.href = "../pages/forms_invalide.html?nom=" + result[0].nom + "&prenom=" + result[0].prenom + "&dateNaiss=" + result[0].dateNaiss + "&profession=" + result[0].profession + "&idUser=" + result[0].id + "&idPaiement=" + result[0].idPaiement + "&date_debut=" + result[0].date_debut + "&date_fin=" + result[0].date_fin + "&nbseances_total=" + result[0].nbseances_total + "&nbseances_en_cours=" + result[0].nbseances_en_cours + "&dateencours=" + result[0].dateencours + "&civilite=" + result[0].civilite + "&id_typeabonnement=" + result[0].id_typeabonnement + "&photo=" + result[0].photo + "&date_autorisation=" + result[0].date_autorisation+ "&email=" + result[0].email;

                                            }
                                        });
                                        fooSound2.play();

                                    }
                                });

                                c = "";
                                b = "";

                            }
                        } else if (result[0].date_fin >= nows && result[0].id_typeabonnement != 18) {
                            // alert(" NON ");
                            // if ( process(result[0].date_fin) >= process(nows)){

                            console.log(" COOL 0000 ");

                            // var player = require('play-sound')({player: "play"})


                            // var player = require('play-sound')(opts = {})
                            // $ mplayer foo.mp3 

                            // console.log(result[0].id_typeabonnement);
                            // alert(result[0].id_typeabonnement);

                            soundManager.soundManager.setup({
                                // where to find flash audio SWFs, as needed
                                //url: '/path/to/swf-files/',
                                onready: function() {
                                    console.log("  SM2 is ready . play audio!");
                                    var fooSound0 = soundManager.soundManager.createSound({
                                        url: '../foo.mp3',
                                        onfinish: function() {
                                            document.location.href = "../pages/forms_valide.html?nom=" + result[0].nom + "&prenom=" + result[0].prenom + "&dateNaiss=" + result[0].dateNaiss + "&profession=" + result[0].profession + "&idUser=" + result[0].id + "&idPaiement=" + result[0].idPaiement + "&date_debut=" + result[0].date_debut + "&date_fin=" + result[0].date_fin + "&nbseances_total=" + result[0].nbseances_total + "&nbseances_en_cours=" + result[0].nbseances_en_cours + "&dateencours=" + result[0].dateencours + "&civilite=" + result[0].civilite + "&id_typeabonnement=" + result[0].id_typeabonnement + "&photo=" + result[0].photo + "&date_autorisation=" + result[0].date_autorisation+ "&email=" + result[0].email;

                                        }
                                    });
                                    fooSound0.play();

                                }
                            });

                            c = "";
                            b = "";


                        }



                    } else {

                            var sql001 = "SELECT employers_employers.id, employers_employers.civilte, employers_employers.prenom, employers_employers.nom, employers_employers.profession, employers_employers.dateNaiss, employers_employers.carte_didentite_nationale, employers_employers.telephone, employers_employers.dateNaiss, employers_employers.email, employers_employers.adresse, employers_employers.idcarte, employers_employers.prenom1, employers_employers.nom1, employers_employers.telephone1, employers_employers.prenom2, employers_employers.nom2, employers_employers.telephone2, employers_employers.photo FROM employers_employers WHERE employers_employers.idcarte=" + c + " ORDER BY employers_employers.id DESC LIMIT 1";
                            con.query(sql001, function(err, result, fields) {

                                if (result.length > 0){
                                    //alert(" Cest bon ");

                                    var nows1;
                                    var currentDate = new Date();
                                    var day = currentDate.getDate();
                                    var month = currentDate.getMonth() + 1;
                                    var year = currentDate.getFullYear();

                                    var hours = currentDate.getHours();
                                    var minutes = currentDate.getMinutes();
                                    var secondes = currentDate.getSeconds();


        



                                    if (day == 1){


                                        var days = "0"+1;
                                        if (month == 1){
                                            var months = "0"+1;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        } else if (month == 2){
                                            var months = "0"+2;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 3){
                                            var months = "0"+3;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 4){
                                            var months = "0"+4;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 5){
                                            var months = "0"+5;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 6){
                                            var months = "0"+6;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 7){
                                            var months = "0"+7;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 8){
                                            var months = "0"+8;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 9){
                                            var months = "0"+9;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else {
                                            var months = month;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }
                                    } else if (day == 2){

                                        var days = "0"+2;
                                        // nows1 = year+"-"+month+"-"+days;
                                         if (month == 1){
                                            var months = "0"+1;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        } else if (month == 2){
                                            var months = "0"+2;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 3){
                                            var months = "0"+3;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 4){
                                            var months = "0"+4;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 5){
                                            var months = "0"+5;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 6){
                                            var months = "0"+6;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 7){
                                            var months = "0"+7;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 8){
                                            var months = "0"+8;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 9){
                                            var months = "0"+9;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else {
                                            var months = month;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }
                                    }else if (day == 3){
                                        var days = "0"+3;
                                        // nows1 = year+"-"+month+"-"+days;
                                         if (month == 1){
                                            var months = "0"+1;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        } else if (month == 2){
                                            var months = "0"+2;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 3){
                                            var months = "0"+3;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 4){
                                            var months = "0"+4;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 5){
                                            var months = "0"+5;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 6){
                                            var months = "0"+6;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 7){
                                            var months = "0"+7;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 8){
                                            var months = "0"+8;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 9){
                                            var months = "0"+9;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else {
                                            var months = month;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }
                                    }else if (day == 4){
                                        var days = "0"+4;
                                        // nows1 = year+"-"+month+"-"+days;
                                         if (month == 1){
                                            var months = "0"+1;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        } else if (month == 2){
                                            var months = "0"+2;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 3){
                                            var months = "0"+3;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 4){
                                            var months = "0"+4;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 5){
                                            var months = "0"+5;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 6){
                                            var months = "0"+6;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 7){
                                            var months = "0"+7;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 8){
                                            var months = "0"+8;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 9){
                                            var months = "0"+9;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else {
                                            var months = month;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }
                                    }else if (day == 5){
                                        var days = "0"+5;
                                        // nows1 = year+"-"+month+"-"+days;
                                         if (month == 1){
                                            var months = "0"+1;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        } else if (month == 2){
                                            var months = "0"+2;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 3){
                                            var months = "0"+3;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 4){
                                            var months = "0"+4;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 5){
                                            var months = "0"+5;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 6){
                                            var months = "0"+6;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 7){
                                            var months = "0"+7;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 8){
                                            var months = "0"+8;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 9){
                                            var months = "0"+9;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else {
                                            var months = month;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }
                                    }else if (day == 6){
                                        var days = "0"+6;
                                        // nows1 = year+"-"+month+"-"+days;
                                         if (month == 1){
                                            var months = "0"+1;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        } else if (month == 2){
                                            var months = "0"+2;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 3){
                                            var months = "0"+3;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 4){
                                            var months = "0"+4;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 5){
                                            var months = "0"+5;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 6){
                                            var months = "0"+6;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 7){
                                            var months = "0"+7;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 8){
                                            var months = "0"+8;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 9){
                                            var months = "0"+9;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else {
                                            var months = month;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }
                                    }else if (day == 7){
                                        var days = "0"+7;
                                        // nows1 = year+"-"+month+"-"+days;
                                         if (month == 1){
                                            var months = "0"+1;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        } else if (month == 2){
                                            var months = "0"+2;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 3){
                                            var months = "0"+3;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 4){
                                            var months = "0"+4;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 5){
                                            var months = "0"+5;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 6){
                                            var months = "0"+6;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 7){
                                            var months = "0"+7;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 8){
                                            var months = "0"+8;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 9){
                                            var months = "0"+9;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else {
                                            var months = month;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }
                                    }else if (day == 8){
                                        var days = "0"+8;
                                        // nows1 = year+"-"+month+"-"+days;
                                         if (month == 1){
                                            var months = "0"+1;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        } else if (month == 2){
                                            var months = "0"+2;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 3){
                                            var months = "0"+3;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 4){
                                            var months = "0"+4;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 5){
                                            var months = "0"+5;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 6){
                                            var months = "0"+6;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 7){
                                            var months = "0"+7;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 8){
                                            var months = "0"+8;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 9){
                                            var months = "0"+9;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else {
                                            var months = month;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }
                                    }else if (day == 9){
                                        var days = "0"+9;
                                        // nows1 = year+"-"+month+"-"+day;
                                         if (month == 1){
                                            var months = "0"+1;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        } else if (month == 2){
                                            var months = "0"+2;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 3){
                                            var months = "0"+3;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 4){
                                            var months = "0"+4;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 5){
                                            var months = "0"+5;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 6){
                                            var months = "0"+6;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 7){
                                            var months = "0"+7;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 8){
                                            var months = "0"+8;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 9){
                                            var months = "0"+9;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else {
                                            var months = month;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }
                                    }else {
                                        var days = day;
                                        // nows1 = year+"-"+month+"-"+days;
                                         if (month == 1){
                                            var months = "0"+1;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        } else if (month == 2){
                                            var months = "0"+2;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 3){
                                            var months = "0"+3;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 4){
                                            var months = "0"+4;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 5){
                                            var months = "0"+5;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 6){
                                            var months = "0"+6;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 7){
                                            var months = "0"+7;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 8){
                                            var months = "0"+8;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else if (month == 9){
                                            var months = "0"+9;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }else {
                                            var months = month;
                                            nows1 = year+"-"+months+"-"+days+" "+hours+":"+minutes+":"+secondes+"."+"0";
                                        }
                                    }




                                    var sql2001 = "INSERT INTO employers_pointage (id, idUser, date_et_heures ) VALUES('?','"+result[0].id+"','"+nows1+"')";

                                    con.query(sql2001, function(err2, result2, fields2) {
                                            if (err2) throw err2;


                                        soundManager.soundManager.setup({
                                        // where to find flash audio SWFs, as needed
                                        //url: '/path/to/swf-files/',
                                            onready: function() {
                                                console.log("  SM2 is ready . play audio!");
                                                var fooSound = soundManager.soundManager.createSound({
                                                    url: '../foo.mp3',
                                                    onfinish: function() {
                                                        document.location.href = "../pages/forms_valide_employers.html?nom=" + result[0].nom + "&prenom=" + result[0].prenom + "&dateNaiss=" + result[0].dateNaiss + "&profession=" + result[0].profession + "&civilite=" + result[0].civilte +  "&photo=" + result[0].photo + "&email=" + result[0].email+ "&id=" + result[0].id+ "&telephone=" + result[0].telephone+ "&adresse=" + result[0].adresse+ "&prenom1=" + result[0].prenom1+ "&nom1=" + result[0].nom1+ "&nom2=" + result[0].nom2+ "&prenom2=" + result[0].prenom2+ "&telephone1=" + result[0].telephone1+ "&telephone2=" + result[0].telephone2;

                                                    }
                                                });
                                                fooSound.play();
                                            }
                                        });

                                        c = "";
                                        b = "";


                                    });


                                    
                                    console.log(result);
                                }else {
                                    //alert(" pas bon ");
                                    console.log(" pas bon ");

                                }

                            });


                    }

                    /*
                    var player = require('play-sound')(opts = {})
                        // $ mplayer foo.mp3 
                        player.play('foo.mp3', function(err){
                          if (err) throw err
                        })
                        */
                });

                // if (err) throw err;
                console.log("1 record inserted");
            });
            //});

            var date1 = '01/12/2018';
            var date2 = '12/10/2018';


            /*
                                            var player = require('play-sound')(opts = {})
                                                // $ mplayer foo.mp3 
                                                player.play('foo.mp3', function(err){
                                                  if (err) throw err
                                                })
                                                */

            console.log(" COOL  DATE DATE DATE");
            // document.location.href="index.html?nom="+row.nom+"&prenom="+row.prenom+"&civilite="+row.civilite+"&profession="+row.profession+"&email="+row.email+"&ville="+row.ville+"&datedebut="+row.datedebut+"&datefin="+row.datefin+"&identifiant_carte="+row.identifiant_carte;
            /*
                                            var player = require('play-sound')(opts = {})
                                                // $ mplayer foo.mp3 
                                                player.play('faux.mp3', function(err){
                                                  if (err) throw err
                                                })

                                                */

            // document.location.href="index.html?nom="+row.nom+"&prenom="+row.prenom+"&civilite="+row.civilite+"&profession="+row.profession+"&email="+row.email+"&ville="+row.ville+"&datedebut="+row.datedebut+"&datefin="+row.datefin+"&identifiant_carte="+row.identifiant_carte;

            //stmt.finalize();

        } else {

            if (b.length == 11) {

                console.log(" La valeur de B  supérieur à 10 caracteres est :  " + b);
                var tt = b.substring(1, 11);
                console.log(" 0 à 10 " + tt);
                b = tt;
                var c = b;

                // while(c.length>12){






                var currentDate = new Date()
                var day = currentDate.getDate()
                var month = currentDate.getMonth() + 1
                var year = currentDate.getFullYear()
                    // var nows = day + "/" + month + "/" + year;
                var nows = year + "-" + month + "-" + day;

                console.log("  DATE " + nows);




                function process(date) {

                    // var parts = date.split("/");
                    var parts = date.split("-");
                    var date = new Date(parts[1] + "-" + parts[0] + "-" + parts[2]);
                    // var date = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);

                    return date.getTime();
                }







                console.log(" LA VALEUR DE B " + c);
                con.connect(function(err) {

                    // if (err) throw err;
                    console.log("Connected!");

                    // var sql1 = "SELECT idcarte FROM utilisateur2 WHERE idcarte="+c;
                    var sql1 = "SELECT users_utilisateur2.id, users_utilisateur2.idcarte, users_utilisateur2.photo, users_utilisateur2.civilite, users_utilisateur2.id_typeabonnement, users_utilisateur2.prenom, users_utilisateur2.nom, users_utilisateur2.dateNaiss, users_utilisateur2.profession, users_paiement.date_debut, users_paiement.date_fin, users_paiement.nbseances_total, users_paiement.nbseances_en_cours, users_paiement.dateencours, users_paiement.idPaiement FROM users_utilisateur2, users_paiement, users_paiement.date_autorisation WHERE users_utilisateur2.idcarte=" + c + " AND users_utilisateur2.id=users_paiement.idUser ORDER BY users_paiement.id DESC LIMIT 1";

                    con.query(sql1, function(err, result, fields) {

                        console.log(" LA valeur de bb est " + c);
                        console.log(" COOl " + sql1);

                        if (result.length > 0) {


                            if (result[0].date_fin >= nows) {

                                console.log(" COOL 0000 ");

                                // var player = require('play-sound')(opts = {})




                                soundManager.soundManager.setup({
                                    // where to find flash audio SWFs, as needed
                                    //url: '/path/to/swf-files/',
                                    onready: function() {
                                        console.log("  SM2 is ready . play audio!");
                                        var fooSound03 = soundManager.soundManager.createSound({
                                            url: '../foo.mp3',
                                            onfinish: function() {
                                                document.location.href = "../pages/forms_valide.html?nom=" + result[0].nom + "&prenom=" + result[0].prenom + "&dateNaiss=" + result[0].dateNaiss + "&profession=" + result[0].profession + "&idUser=" + result[0].id + "&idPaiement=" + result[0].idPaiement + "&date_debut=" + result[0].date_debut + "&date_fin=" + result[0].date_fin + "&nbseances_total=" + result[0].nbseances_total + "&nbseances_en_cours=" + result[0].nbseances_en_cours + "&dateencours=" + result[0].dateencours + "&civilite=" + result[0].civilite + "&id_typeabonnement=" + result[0].id_typeabonnement + "&photo=" + result[0].photo + "&date_autorisation=" + result[0].date_autorisation+ "&email=" + result[0].email;

                                            }

                                        });
                                        fooSound03.play();

                                    }
                                });



                                c = "";
                                b = "";

                            } else if (result[0].nbseances_total > 0) {

                                if (result[0].nbseances_total > result[0].nbseances_en_cours & result[0].dateencours == nows) {
                                    console.log(" COOL 222222 ");

                                    // var player = require('play-sound')(opts = {})


                                    soundManager.soundManager.setup({
                                        // where to find flash audio SWFs, as needed
                                        //url: '/path/to/swf-files/',
                                        onready: function() {
                                            console.log("  SM2 is ready . play audio!");
                                            var fooSound04 = soundManager.soundManager.createSound({
                                                url: '../foo.mp3',
                                                onfinish: function() {
                                                    document.location.href = "../pages/forms_valide.html?nom=" + result[0].nom + "&prenom=" + result[0].prenom + "&dateNaiss=" + result[0].dateNaiss + "&profession=" + result[0].profession + "&idUser=" + result[0].id + "&idPaiement=" + result[0].idPaiement + "&date_debut=" + result[0].date_debut + "&date_fin=" + result[0].date_fin + "&nbseances_total=" + result[0].nbseances_total + "&nbseances_en_cours=" + result[0].nbseances_en_cours + "&dateencours=" + result[0].dateencours + "&civilite=" + result[0].civilite + "&id_typeabonnement=" + result[0].id_typeabonnement + "&photo=" + result[0].photo + "&date_autorisation=" + result[0].date_autorisation+ "&email=" + result[0].email;

                                                }

                                            });
                                            fooSound04.play();

                                        }
                                    });

                                    c = "";
                                    b = "";


                                } else if (result[0].nbseances_total > result[0].nbseances_en_cours & result[0].dateencours != nows) {
                                    console.log(" NON COOL 3333 ");


                                    con.connect(function(err) {

                                        // if (err) throw err;
                                        console.log("Connected!");
                                        var dd = "";
                                        var df = "";
                                        var valeur_actuel = result[0].nbseances_en_cours + 1;
                                        console.log(" La valeur de Nb senaces en cours " + result[0].nbseances_en_cours);
                                        var sql3 = "INSERT INTO users_paiement (idPaiement, date_debut, date_fin, idUser, nbseances_total, nbseances_en_cours, dateencours, date_autorisation) VALUES ('?', '" + dd + "','" + df + "','" + result[0].idUser + "','" + result[0].nbseances_total + "','" + valeur_actuel + "','" + nows + "','" + "" + "')";
                                        console.log(sql3);
                                        con.query(sql3, function(err, result) {
                                            // if (err) throw err;
                                            console.log("1 record inserted");
                                        });


                                        soundManager.soundManager.setup({
                                            // where to find flash audio SWFs, as needed
                                            //url: '/path/to/swf-files/',
                                            onready: function() {
                                                console.log("  SM2 is ready . play audio!");
                                                var fooSound05 = soundManager.soundManager.createSound({
                                                    url: '../foo.mp3',
                                                    onfinish: function() {
                                                        document.location.href = "../pages/forms_valide.html?nom=" + result[0].nom + "&prenom=" + result[0].prenom + "&dateNaiss=" + result[0].dateNaiss + "&profession=" + result[0].profession + "&idUser=" + result[0].id + "&idPaiement=" + result[0].idPaiement + "&date_debut=" + result[0].date_debut + "&date_fin=" + result[0].date_fin + "&nbseances_total=" + result[0].nbseances_total + "&nbseances_en_cours=" + result[0].nbseances_en_cours + "&dateencours=" + result[0].dateencours + "&civilite=" + result[0].civilite + "&id_typeabonnement=" + result[0].id_typeabonnement + "&photo=" + result[0].photo + "&date_autorisation=" + result[0].date_autorisation+ "&email=" + result[0].email;

                                                    }
                                                });
                                                fooSound05.play();

                                            }
                                        });




                                    });
                                    c = "";
                                    b = "";


                                } else if (result[0].nbseances_total == result[0].nbseances_en_cours) {

                                    console.log(" COOL 222222 ");

                                    // var player = require('play-sound')({player: "C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Lecteur Windows Media.exe"})

                                    //  var player = require('play-sound')(opts = {})



                                    soundManager.soundManager.setup({
                                        // where to find flash audio SWFs, as needed
                                        //url: '/path/to/swf-files/',
                                        onready: function() {
                                            console.log("  SM2 is ready . play audio!");
                                            var fooSound = soundManager.soundManager.createSound({
                                                url: '../faux.mp3',
                                                onfinish: function() {
                                                    document.location.href = "../pages/forms_invalide.html?nom=" + result[0].nom + "&prenom=" + result[0].prenom + "&dateNaiss=" + result[0].dateNaiss + "&profession=" + result[0].profession + "&idUser=" + result[0].id + "&idPaiement=" + result[0].idPaiement + "&date_debut=" + result[0].date_debut + "&date_fin=" + result[0].date_fin + "&nbseances_total=" + result[0].nbseances_total + "&nbseances_en_cours=" + result[0].nbseances_en_cours + "&dateencours=" + result[0].dateencours + "&civilite=" + result[0].civilite + "&id_typeabonnement=" + result[0].id_typeabonnement + "&photo=" + result[0].photo + "&date_autorisation=" + result[0].date_autorisation+ "&email=" + result[0].email;

                                                }
                                            });
                                            fooSound.play();

                                        }
                                    });

                                    c = "";
                                    b = "";




                                }
                            } else if (result[0].date_fin < nows) {
                                // var player = require('play-sound')({player: "C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Lecteur Windows Media.exe"})

                                // var player = require('play-sound')(opts = {})



                                soundManager.soundManager.setup({
                                    // where to find flash audio SWFs, as needed
                                    //url: '/path/to/swf-files/',
                                    onready: function() {
                                        console.log("  SM2 is ready . play audio!");
                                        var fooSound = soundManager.soundManager.createSound({
                                            url: '../faux.mp3',
                                            onfinish: function() {
                                                document.location.href = "../pages/forms_invalide.html?nom=" + result[0].nom + "&prenom=" + result[0].prenom + "&dateNaiss=" + result[0].dateNaiss + "&profession=" + result[0].profession + "&idUser=" + result[0].id + "&idPaiement=" + result[0].idPaiement + "&date_debut=" + result[0].date_debut + "&date_fin=" + result[0].date_fin + "&nbseances_total=" + result[0].nbseances_total + "&nbseances_en_cours=" + result[0].nbseances_en_cours + "&dateencours=" + result[0].dateencours + "&civilite=" + result[0].civilite + "&id_typeabonnement=" + result[0].id_typeabonnement + "&photo=" + result[0].photo + "&date_autorisation=" + result[0].date_autorisation+ "&email=" + result[0].email;

                                            }
                                        });
                                        fooSound.play();

                                    }
                                });
                                c = "";
                                b = "";




                            }

                        } else {

                        }


                        // if (err) throw err;
                        console.log("1 record inserted");
                    });

                    // console.log(" COOL  DATE DATE DATE");
                    //document.location.href="index.html?nom="+row.nom+"&prenom="+row.prenom+"&civilite="+row.civilite+"&profession="+row.profession+"&email="+row.email+"&ville="+row.ville+"&datedebut="+row.datedebut+"&datefin="+row.datefin+"&identifiant_carte="+row.identifiant_carte;

                    /*
                                                            var player = require('play-sound')(opts = {})
                                                                // $ mplayer foo.mp3 
                                                                player.play('faux.mp3', function(err){
                                                                  if (err) throw err
                                                                })

                                                            console.log(" NON COOL  DATE DATE DATE");
                                                            // document.location.href="index.html?nom="+row.nom+"&prenom="+row.prenom+"&civilite="+row.civilite+"&profession="+row.profession+"&email="+row.email+"&ville="+row.ville+"&datedebut="+row.datedebut+"&datefin="+row.datefin+"&identifiant_carte="+row.identifiant_carte;
                                                        } 
                                                        */
                    // document.location.href="index2.html";
                    // ///// b = "";
                    //stmt.finalize();

                });
            }
        }
    }


});