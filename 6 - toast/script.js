/**
 * document.createElement()
 * element.classList.add()
 * element.innerHTML
 * elemParent.appendChild(elemEnfant)
 * element.remove()
 * setTimeout()
 */

// 1. Je recupere le bouton
const btn = document.querySelector("button");
// 2. Je recupere le conteneur de toasts
const ctnToasts = document.querySelector(".container-toasts");

// 3. J'ecoute le clique sur le bouton
btn.addEventListener("click",function(){
    // 4. Je crée une div
    const toast = document.createElement("div");
    // 5. J'applique la classe toast sur la div
    toast.classList.add("toast");
    // 6. J'ajoute du code HTML dans la div toast
    toast.innerHTML = "<p>Votre fichier est enregistrer !</p>";
    // 7. Je rajoute la div dans le document entant qu'enfant du contrneur de toasts
    ctnToasts.appendChild(toast);

    // Fonction pour lancer le fade-out puis retirer le toast
    function removeToastWithFade() {
        toast.classList.add("fadeout");
        toast.addEventListener("transitionend", function handler() {
            toast.removeEventListener("transitionend", handler);
            toast.remove();
        });
    }

    // 8. Au bout de 3 secondes le toast est retiré du document avec fade-out
    setTimeout(removeToastWithFade, 3000);
    // 9. Lors du clique sur le toast le toast est retiré du document avec fade-out
    toast.addEventListener("click", removeToastWithFade);
});