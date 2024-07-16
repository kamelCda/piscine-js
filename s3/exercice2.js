// Exercice 2: Regrouper des éléments d'un tableau par propriété

const tab=[
{   nom:"Lemoine",
    prenom:"Philip",
    age:30
},
{
    nom:"Lecoq",
    prenom:"Emmanuel",
    age:25
},
{   nom:"Marchand",
    prenom:"Jean",
    age:20
}
];






const tableau_de_nom=[tab[0].nom,tab[1].nom,tab[2].nom];
const tableau_de_prenom=[tab[0].prenom,tab[1].prenom,tab[2].prenom];
const tableau_des_ages=[tab[0].age,tab[1].age,tab[2].age];

console.log(` Nom :${tableau_de_nom} \n Prenom :${tableau_de_prenom} \n Ages :${tableau_des_ages}`);



