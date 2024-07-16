// Exercice 6: Filtrer un tableau d'objets par une plage de dates


// tableau d'objets
const tableau =[
    {
        nom:"Theo",
        age:"25/06/2021"
    },
    {
        nom:"Gaston",
        age:"02/04/1940"
    },
    {
        nom:"Luc",
        age:"20/11/1989"
    },
    {
        nom:"Jean-Baptiste",
        age:"02/10/1980"
    }
 

];

//on recupere les valeurs des propriétés des objet du tableau dans un autre tableau
const mapTab=tableau.map(v=>v.age);
//tableau original
console.log("tableau original : -> ["+mapTab+"]");

//tableau reduit 
const plage =mapTab.slice(1,3);
console.log("plage de la 2eme date, à la 4eme : -> ["+plage+"]");