// Exercice 8: Fusionner deux tableaux et supprimer les doublons
const tableau_1=['nom','prenom','age'];
const tableau_2=['age','adresse'];

// on rentre les valeurs du 2eme tableau dans le premier
const fusion=tableau_1.push(...tableau_2);

//içi ,on retire les doublons
const tableauSansDoublon=[...new Set(tableau_1)];
console.log(tableauSansDoublon);




