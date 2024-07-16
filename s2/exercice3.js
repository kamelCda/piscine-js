// Exercice 3: Filtrer les nombres divisions d'un tableau
const tab=[1,4,6,9,3,8];


tab.forEach(element => {
    let division=element%2;
    if(division==0){
        console.log("nombre pair :"+element);
    }else if(division!=0){
        console.log("nombre impair :"+element);
    }
});
