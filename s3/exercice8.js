// Exercice 8: Trier un tableau d'objets par plusieurs propriétés


const tableauObj=[
    {
        nom:"Lucile",
        age:20
    },
    {
        nom:"Jeanne",
        age:21
    },
    {
        nom:"Sandrine",
        age:19
    },
    {
        nom:"Marie",
        age:22
    },

];


const mapping=tableauObj.map(v=>v.nom);
console.log("nom :  "+mapping);

const mapping2=tableauObj.map(v=>v.prenom);
console.log("prenom :  "+mapping2);

const mapping3=tableauObj.map(v=>v.age);
console.log("age :  "+mapping3);