// Exercice 2: Gérer les erreurs avec try...catch
function France (region){
    const ville={
        nord:'lille',
        est:'Lyon',
        sud:'Marseille',
        ouest:'Bordeaux'
    }
     return Promise.resolve(ville[region]);
    }

try {
    France('nord')
        .then(v => console.log(v))
        .catch(e => console.error(e.message));
} catch (error) {
    console.error('An unexpected error occurred:', error);
}

