// Exercice 6: Utilisation de fetch pour récupérer des données d'une API

const recherche =()=>{
    return fetch('https://jsonplaceholder.typicode.com/todos/1') 
}
recherche()
.then(response => response.json())
.then(json => console.log(json))