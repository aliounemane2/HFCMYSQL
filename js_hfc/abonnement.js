// include('../js_hfc/connexion.js');
	// <script src="../js_hfc/connexion.js"></script>
	
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hfc_db"
});

	
/*	
function include(fileName){
	document.write("<script type='text/javascript' src='"+fileName+"'></script>" );
}*/
	//include('../js_hfc/connexion.js');

	
	/*

var con = mysql.createConnection({
  host: "109.107.36.85",
  user: "admin",
  password: "lkrkas8g20fpixj3",
  database: "hfc_db"
});
*/


con.connect(function(err) {
  // if (err) throw err;
   console.log("Connected!");
    var sql = "SELECT id, nom, montant FROM users_type_Abonnement";


  
  con.query(sql, function (err, result, fields) {
    // if (err) throw err;
    // console.log(result[1].id +" "+ result[1].nom);
    console.log(" CCCCCCCCC "+result.length);

      // var i;


      for (i=0; i<= result.length-1;i++){
        var e = document.getElementById("type_abonnement");
        e.innerHTML= e.innerHTML + "<option value="+result[i].id+">"+result[i].nom+" == > "+result[i].montant+"  F CFA "+"</option><br/>";
      //         e.innerHTML= e.innerHTML + "<option value="+result[i].id+">"+result[i].nom+" == > "+result[i].montant+"</option><br/>";
      
        document.getElementById("dd").value = result[0].id;

      }

      
        //var e= document.getElementById("type_abonnement");
        //e.innerHTML= e.innerHTML + "<option value="+result[0].id+">"+result[0].nom+" == > "+result[0].montant+"</option><br/>"+"<option value="+result[1].id+">"+result[1].nom+" == > "+result[1].montant+"</option><br/>"+"<option value="+result[2].id+">"+result[2].nom+" == > "+result[2].montant+"</option><br/>"+"<option value="+result[3].id+">"+result[3].nom+" == > "+result[3].montant+"</option><br/>"+"<option value="+result[4].id+">"+result[4].nom+" == > "+result[4].montant+"</option><br/>"+"<option value="+result[5].id+">"+result[5].nom+" == > "+result[5].montant+"</option><br/>"+"<option value="+result[6].id+">"+result[6].nom+" == > "+result[6].montant+"</option><br/>"+"<option value="+result[7].id+">"+result[7].nom+" == > "+result[7].montant+"</option><br/>"+"<option value="+result[8].id+">"+result[8].nom+" == > "+result[8].montant+"</option><br/>"+"<option value="+result[9].id+">"+result[9].nom+" == > "+result[9].montant+"</option><br/>"+"<option value="+result[10].id+">"+result[10].nom+" == > "+result[10].montant+"</option><br/>"+"<option value="+result[11].id+">"+result[11].nom+" == > "+result[11].montant+"</option><br/>";
        



        e.addEventListener("change", function(){
        var valeur = document.getElementById("type_abonnement").value;
          if( valeur == 5 || valeur == 10 || valeur == 15 || valeur == 16 || valeur == 17){
            console.log(valeur);


            document.getElementById("seances").style.display='block';
            document.getElementById("datesss").style.display='none';
            // document.getElementById("nbseances").innerHTML = valeur;

            document.getElementById("dd").value = valeur;
            console.log(" CCCOOOOOLLLLLL ");


            console.log(" COOLLLLLLLLLLLLLLLLLLLLLLLL  ");

          }else{
            console.log(valeur);
            document.getElementById("dd").value = valeur;

            document.getElementById("seances").style.display='none';
            document.getElementById("datesss").style.display='block';




          }


        });
  });


});
