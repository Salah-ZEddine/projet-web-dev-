    document.getElementById('cvForm').addEventListener('submit',function(event){
    event.preventDefault();

    var prenom = document.getElementById('fname').value;
    var nom = document.getElementById('lname').value;
    var datedenaissance = document.getElementById('birthday').value;
    var adresse = document.getElementById('adresse').value;
    var email = document.getElementById('email').value;
    var situationFamiliale = document.querySelector('input[name="SF"]:checked').value;
    var titreCV = document.getElementById('tcv').value;
    var description = document.getElementById('des').value;
    var typeBac = document.getElementById('bac').value;
    var diplome = document.getElementById('Diplomes').value;
    var competencesTechniques = document.getElementById('goal').value;

    var langues = [];
    if(document.getElementById('ENG').checked){
        langues.push('Anglais');
    }
    if(document.getElementById('FR').checked){
        langues.push('Français');
    }
    if(document.getElementById('AR').checked){
        langues.push('Arabe');
    }
    if(document.getElementById('other').checked){
        var autreslangues = document.getElementById('lang').value;
        langues.push(autreslangues);
    }

    var formData = {
        prenom: prenom,
        nom: nom,
        dateNaissance: dateNaissance,
        adresse: adresse,
        email: email,
        situationFamiliale: situationFamiliale,
        titreCV: titreCV,
        description: description,
        typeBac: typeBac,
        diplome: diplome,
        competencesTechniques: competencesTechniques,
        langues: langues
    };

    localStorage.setItem('formData', JSON.stringify(formData));

    // Redirect to another page
    window.location.href = 'data.html';
});