/**
 * Event submit
 * event.preventDefault()
 * HTMLInputElement.value
 * String.prototype.trim()
 * regex
 * RegexExp.prototype.test()
 */



/**
 * 1 .Je recupère
 *      - le formulaire
 *      - le champ prenom
 *      - le champ nom
 *      - le champ email
 *      - le champ message
 */
const form = document.getElementById("formulaire");
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");

// 2. Lorsque le formulaire est soumit (clique du bouton submit ou touche ENTER)
form.addEventListener("submit",function(event){
    event.preventDefault();

    // Réinitialise tous les messages d'erreur
    const errors = document.querySelectorAll('.error');
    errors.forEach(e => e.classList.add('invisible'));

    let hasError = false;

    // Prénom
    if(prenom.value.trim().length <= 2 || prenom.value.trim().length >= 20) {
        prenom.nextElementSibling.classList.remove('invisible');
        hasError = true;
    }

    // Nom
    if(nom.value.trim().length <= 2 || nom.value.trim().length >= 20) {
        nom.nextElementSibling.classList.remove('invisible');
        hasError = true;
    }

    // Email
    if(!isValidEmail(email.value.trim())) {
        email.nextElementSibling.classList.remove('invisible');
        hasError = true;
    }

    // Message
    if(message.value.trim().length < 10 || message.value.trim().length > 100) {
        message.nextElementSibling.classList.remove('invisible');
        hasError = true;
    }

    // Si aucune erreur, on peut traiter le formulaire (ex: afficher un message de succès ou envoyer les données)
    if(!hasError) {
        alert('Formulaire envoyé avec succès !');
        form.reset();
    }
});

/**
 * HELPERS FUNCTIONS
 */
/**
 * Renvoie vrai si la string email passé en paramètre correspond à une adresse email valide.
 */
function isValidEmail(email){
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Création d'un objet RegexExp
    if (emailFormat.test(email))
    {
        return true;
    }else{
        return false
    }
}


/**
 * BONUS HORS ACTIVITE *********************************************
 * Envoyer un mail
 */
/**
 * sendMail : Fonction qui permet d'envoyer un mail
 */
function sendMail(message,from){
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"message":"${message}","from":"${from}"}`
      };
      
    fetch('http://localhost:3000/sendmail', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}