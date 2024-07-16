// Exercice 8: Fusionner deux tableaux et supprimer les doublons
const tableau_1=['nom','prenom','age'];
const tableau_2=['age','adresse'];

tableau_1.push(...tableau_2);
//  console.log(tableau_1);
const tableauSansDoublon=[...new Set(tableau_1)];
console.log(tableauSansDoublon);




