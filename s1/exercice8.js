// Exercice 8: Recherche dans un tableau
var tableau =[5,6,3,9,7];
var objectif=9;
var recherche= tableau.findIndex(element=>element==objectif);
// -1 signifie que 'on a pas trouvé l'element dans le tableau
if(recherche!== -1){
alert (`element ${objectif} trouvé `);
}