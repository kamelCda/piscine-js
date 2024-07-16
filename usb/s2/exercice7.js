// Exercice 7: Vérifier si un mot est un palindrome
let mot ="kayak";
 mot ="A man, a plan, a canal. Panama";
//on recupere le mot ,on le met en minuscule et ont utilise un regex pour passer en revu les character et on retire les espaces vides('') 
var miseEnForme = mot.toLowerCase().replace(/[^0-9a-z]/gi, '');

//console.log(miseEnForme);
//on inverse le mot pour verifier 
var inverserMot = miseEnForme.split('').reverse().join('');
//console.log(inverserMot);
// on verifier si le mot et son inverse son identique dans les deux sens
const verification=(miseEnForme === inverserMot)?true:false;
console.log(verification);