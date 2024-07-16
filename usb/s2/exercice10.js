// Exercice 10: Convertir une chaîne de caractères en camelCase
function camelCase(str) {
  let minuscule = str.toLowerCase();
  //converti les mot en index de tableau puis efface les espaces
  return (
    minuscule
      .split(" ")
      // recuperation des mots a partir de la phrase
      .map((mot, index) =>
        // si le mot est le premier element alors il n'y a pas besoin de le "capitaliser" sinon prendre la premier lettre et la mettre en capitale
        index === 0 ? mot : mot.charAt(0).toUpperCase() + mot.slice(1)
      )
      .join("")
  );
}

const str = "convertir en camelCase";
console.log(camelCase(str));
