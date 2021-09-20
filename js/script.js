// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

let degSecond = 360/60;         // un tour de cercle fait 360 degré divisé par 60 secondes(pour un tour entier pour l'aiguille des secondes)
let degMinute = 360/60/60 ;     //  un tour entier de l'aiguille des minutes se fait en 60 fois de l'aiguille des secondes
let degHour = 360/12/60/60;     // un tour entier de l'aiguille des heures se fait en 12 fois 



// Déplacer les aiguilles 
function demarrerLaMontre() {
    //Extraire l'heure actuelle à l'aide de l'objet Date()
    let today = new Date;

    //Stocker l'heure , minute , seconde  dans des varaiables
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();



    // Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
    // Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
    let timeInSeconds = second + (minute * 60)+ (hour*3600); // Ici l'heure actuelle en seconde (Depuis 00h00).

    AIGUILLESEC.style.transform = "rotate(" + timeInSeconds*degSecond + "deg)";
    AIGUILLEMIN.style.transform = 'rotate(' + timeInSeconds*degMinute + 'deg)';
    AIGUILLEHR.style.transform  = 'rotate(' + timeInSeconds*degHour + 'deg)';

    // Pour chaque aiguille, on multiplie l'heure actuelle en seconde(timeInSeconds) par le nombre de degré d'avancement de chaque aiguille.
    // Et on applique le transform rotate en CSS du nombre de degrés calculés

}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);