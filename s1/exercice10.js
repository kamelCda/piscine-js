// Exercice 10: Calculer la factorielle d'un nombre
function fact(nbr){
    var i, nbr, f = 1;
  
    for(i = 1; i <= nbr; i++)  
    {
      f = f * i;   // ou f *= i;
    }  
    return f;
  }
  
  console.log(fact(3));