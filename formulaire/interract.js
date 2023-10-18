var data = window.location.search;
var params = new URLSearchParams(data);
console.log(params);
var name = params.get("fname");
var prenom = params.get("lname");
var age = params.get("birthday");
var email = params.get("email");
var adresse = params.get("adresse");
var titreCV = params.get("tcv");
var description = params.get("des");
var typeBac = params.get("bac");
var situationfamiliale = params.get("SF")
var diplome = params.get("Diplomes");
var cmptechniques = params.get("goal");


var getData = "<h3>INFORMATION_PERSONNEL</h3> <br> NOM: <br>" + name + "<br><br>";
getData += "PRENOM: <br>" + prenom + "<br><br>";
getData += "date de naissance : <br>" + age + "<br><br>";
getData += "EMAIL:<br> " + email + "<br><br>";
getData += "Adresse:<br> " + adresse + "<br><br>";
getData += "cv:<br> " + titreCV + "<br><br>";
getData += "description:<br> " + description + "<br><br>";
getData += "Bac:<br> " + typeBac + "<br><br>";
getData += "Situation familiale:<br> " + situationfamiliale + "<br><br>";
getData += "Diplome :<br> " + diplome + "<br><br>";
getData += "Compétences techniques :<br> " + cmptechniques + "<br><br>";

//collecte de données entrées 

document.getElementById("res").innerHTML = getData;
