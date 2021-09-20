// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

let degSecondPerSec = 360/60;         // nombre de degré par seconde pour l'aiguille des secondes
let degMinutePerSec = 360/60/60 ;     // nombre de degré par seconde pour l'aiguille des minutes
let degHourPerSec = 360/12/60/60;     // nombre de degré par seconde pour l'aiguille des heures

//Extraire l'heure actuelle à l'aide de l'objet Date()
let today = new Date;

//Stocker l'heure , minute , seconde  dans des varaiables
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

let timeInSeconds = second + (minute * 60)+ (hour*3600); // Ici l'heure actuelle en seconde (Depuis 00h00).

let degreTotalSecond = timeInSeconds*degSecondPerSec;   // nombre total de degrés depuis 00h00 de l'aiguille des secondes
let degreTotalMinute = timeInSeconds*degMinutePerSec;   // de l'aiguille des minutes
let degreTotalHour   = timeInSeconds*degHourPerSec;     // de l'aiguille des heures


// Déplacer les aiguilles 
function demarrerLaMontre() {

    degreTotalSecond += degSecondPerSec;
    degreTotalMinute += degMinutePerSec;
    degreTotalHour   += degHourPerSec;
    // Pour chaque aiguille, on ajoute le nombre de degré calculé par seconde au précedent nombre de degré total.

    AIGUILLESEC.style.transform = "rotate(" + degreTotalSecond + "deg)";
    AIGUILLEMIN.style.transform = 'rotate(' + degreTotalMinute + 'deg)';
    AIGUILLEHR.style.transform  = 'rotate(' + degreTotalHour + 'deg)';
    // Et on applique le transform rotate en CSS du nombre de degrés calculés

}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);