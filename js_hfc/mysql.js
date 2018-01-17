var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hfc_db"
});


/*
con.connect(function(err) {
  if (err) throw err;
   console.log("Connected!");
    var sql = "INSERT INTO personne (id, nom) VALUES (11,'00000000')";


  
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

*/

});
