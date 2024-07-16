// Exercice 9: Calculer l'âge à partir d'une date de naissance

function getAge(date) {
  const aujourd_hui = new Date();
  let age = aujourd_hui.getFullYear() - date.getFullYear();
  const m = aujourd_hui.getMonth() - date.getMonth();

  if (m < 0 || (m === 0 && aujourd_hui.getDate() < date.getDate())) {
    age--;
  }

  return age;
}

console.log(getAge(new Date(1987, 10, 3))); //Date(année, mois, jour)
