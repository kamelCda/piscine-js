// Exercice 2: Trouver le plus grand nombre dans un tableau
let tableau =[0,7,2,3];
// on associe la valeur maximale initiale, à la valeur du premier index
let valMax=tableau[0];
// on parcours le tableau,puis on compare la valeur à toute les autres presentes dans le tableau ,si la valeur est superieure ,
//alors on donne à la variable qui represente la valeure maximale,la nouvelle valeur
    tableau.forEach(v=>{
        if(valMax <v){
            valMax=v;
        }
           
                });
      console.log(valMax);
   
   

 