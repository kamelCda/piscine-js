// Exercice 9: Destructuration d'objets avec renommage

const animal={
    type:['chien','cheval'],
    couleur:['noir','blanc'],
    taille:['20cm','150cm']
}

function animalChoisi(deb,details) {
    const{type,couleur,taille}=details;
return `${deb[0]} j'ai un ${type[1]} de couleur ${couleur[1]} qui mesure ${taille[1]}`
}

const recup=animalChoisi`Bonjour ,${animal} Salut`;
console.log(recup);