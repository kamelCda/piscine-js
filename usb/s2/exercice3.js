// Exercice 3: Filtrer les nombres divisions d'un tableau
const tab=[1,4,6,9,3,8];

// on parcours le tableau 
tab.forEach(element => {
    // on verifie que la division par 2 donne comme reste zero
    let division=element%2;
    // si la division donne zero en reste ,le chiffre est pair
    if(division == 0){
        console.log("nombre pair :"+element);
    // sinon le chiffre est impaire
    }else if(division!=0){
        console.log("nombre impair :"+element);
    }
});
