// Exercice 1: Utilisation de Promise.all
const fonction_1 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("fin de la premiere tempo");
            resolve(); // Resolve the promise
        }, 2000);
    });
};



const fonction_2 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("fin de la deuxieme tempo");
            resolve(); // Resolve the promise
        }, 3000);
    });
};
 //fonction_2();
 
 const recupTempo=async()=>{
      const total= await Promise.all([fonction_1(), fonction_2()]);
     if(total){
     return console.log("les deux temporisation sont finies !");
     }
 }
 recupTempo();