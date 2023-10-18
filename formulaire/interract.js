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

//controle de données entrées 

document.getElementById("res").innerHTML = getData;
form.addEventListener('submit', function (event) {
    let firstNameInput = document.getElementById('fname');
    let lastNameInput = document.getElementById('lname');
    let ageInput = document.getElementById('birthday');
    let emailInput = document.getElementById('email');
    let addressInput = document.getElementById('adresse');
    let cvTitleInput = document.getElementById('tcv');
    let personalObjective = document.getElementById('des');

    const gmailRegex = /^[A-Za-z0-9](\.?[A-Za-z0-9]){5,}@gmail\.com$/;

    let firstName = firstNameInput.value.trim();
    if (!/^[A-Z][A-Z][A-Z]*$/.test(firstName)) {
        alert('Le prénom doit etre en lettres majuscule et ne pas contenir de caractères spéciaux ou de chiffres.');
        event.preventDefault();
    }

    let lastName = lastNameInput.value.trim();
    if (!/^[A-Z][a-zA-Z]*$/.test(lastName)) {
        alert('Le nom doit commencer par une lettre majuscule et ne pas contenir de caractères spéciaux ou de chiffres.');
        event.preventDefault();
    }

    let birthDate = new Date(ageInput.value);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    if (age <= 18) {
        alert("L'âge doit être supérieur à 18 ans.");
        event.preventDefault();
    }

    if (!gmailRegex.test(emailInput.value)) {
        alert("Veuillez entrer une adresse Gmail valide.");
        event.preventDefault();
    }

    let address = addressInput.value.trim();
    if (address.length > 100 || /[^a-zA-Z0-9\s]/.test(address)) {
        alert("L'adresse doit contenir moins de 100 caractères et ne doit pas contenir de caractères spéciaux.");
        event.preventDefault();
    }

    let cvTitle = cvTitleInput.value.trim();
    if (/[^a-zA-Z\s]/.test(cvTitle)) {
        alert('Le titre du CV ne doit pas contenir de chiffres ou de caractères spéciaux.');
        event.preventDefault();
    }

    const regex = /[\d!@#$%^&*()_+{}\[\]:;<>,.?~\\\/|=]/;

    if (regex.test(personalObjective.value)) {
        alert("L'objectif personnel ne doit pas contenir de chiffres ou de caractères spéciaux.");
        event.preventDefault();
    }
});