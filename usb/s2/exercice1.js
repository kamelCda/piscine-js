// Exercice 1: Somme des éléments d'un tableau
let tableau=[0,1,2,3,4,5,6,7];
// initialiser le compteur
let somme=0;
// boucle pour parcourir le tableau
tableau.forEach(index=>{
    //ajouter à la somme initiale ,la valeur de l'index parcouru
    somme+= index;
});
// affichage de la somme finale
console.log(somme);
