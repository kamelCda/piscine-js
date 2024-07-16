// Exercice 9: Vérifier si tous les éléments d'un tableau passent un test

// condition à verifier
const estEnDessousDe=(valeurActuelle)=>valeurActuelle<40;

// tableau de comparaison
const tab=[1,30,24,6,12];

// verifier que chaque valeur du tableau est en dessous de la valeur actuelle
console.log(tab.every(estEnDessousDe));
