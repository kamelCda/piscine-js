// Exercice 1: Supprimer les éléments falsy d'un tableau
const tableau = [0, 1, false, true, '', 'hello', null, undefined, NaN];
//on cree un nouveau tableau pour ne pas alterer l'original
const tableauFiltre = tableau.filter(valeur => valeur!== false && valeur !== null && valeur !== undefined && !isNaN(valeur));
// on affiche le tableau filtré
console.log(tableauFiltre); // Output: [1, true, 'hello']
