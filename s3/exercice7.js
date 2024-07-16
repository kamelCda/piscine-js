// Exercice 7: Implémenter une fonction de réduction personnalisée
const tableau=["yves","pierre","jean","paul"];

// creation d'un second tableau
const map=tableau.map(valeur=>valeur);

console.log("Tableau original : -> "+map);
const reduire=map.slice(0,2);
console.log("Tableau reduit a deux élément : -> "+reduire);