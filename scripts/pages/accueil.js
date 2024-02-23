/**
 * File name : accueil.js
 * Description : contient les scripts de la page d'accueil
 * Date : 21/02/2024
 */

// bloc de la gestion du zoom sur les images au click
{
    // Images de la section dernierProjet
    const clickImage = document.querySelectorAll(".dernier-projet__image")
    // Récupération de la dernière image affecter à la class "clickImage"
    let clickPrecedent = clickImage[0]

    for (let i = 0; i < clickImage.length; i++) {
        clickImage[i].addEventListener("click", (event) => {
            if (event.target.classList.contains("clickImage")) {
                clickPrecedent.classList.remove("clickImage")
            } else {
                clickPrecedent.classList.remove("clickImage")
                event.target.classList.add("clickImage")
                clickPrecedent = clickImage[i]
            }
        })
    }
}

// bloc de vérification de l'email
// TODO: ajouter un try / catch et afficher un message dans le DOM
{
    // Récupértion du champ de l'email
    const email = document.getElementById("email")
    const verificationEmail = new RegExp(
        "[a-zA-Z0-9éè._-]+@[a-zA-Z0-9éè._-]+.[a-zA-Z0-9éè._-]+$"
    )

    email.addEventListener("blur", (event) => {
        email.value === ""
            ? event.target.classList.remove(
                  "form__nom-email-contenair--invalid"
              )
            : verificationEmail.test(event.target.value) === false
            ? event.target.classList.add("form__nom-email-contenair--invalid")
            : event.target.classList.remove(
                  "form__nom-email-contenair--invalid"
              )
    })
}

// if (email.value === "") {
//     event.target.classList.remove("form__nom-email-contenair--invalid")
// } else {
//     if (verificationEmail.test(email.value) === false) {
//             event.target.classList.add("form__nom-email-contenair--invalid")
//     } else {
//         event.target.classList.remove("form__nom-email-contenair--invalid")
//     }
// }
