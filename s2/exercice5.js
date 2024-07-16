// Exercice 5: Compter les occurrences d'une lettre dans une chaîne

/*

const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(indexOfFirst);
*/

const mot="libellule";
/*
const letreL="l";
const indexOfFirst=mot.indexOf(letreL);
console.log("le premier 'l' se trouve en: "+indexOfFirst+"eme place ,et le second se trouve en: "+`${mot.indexOf(letreL,indexOfFirst+1)}`+"eme place");
*/
const nbr_de_l=mot.split("l").length-1;
console.log("la lettre 'l' est sortie: "+nbr_de_l+"fois");