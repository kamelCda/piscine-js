// Exercice 10: Exécuter des promesses en série
/*
    function tempo(){
    const recherche=fetch('https://jsonplaceholder.typicode.com/todos/1');
    return recherche;
    }
    
    tempo()
    .then(v=>v.json())
    .then(v=>console.log(v));
    
*/

    const  getName=(name)=>{
       const Nom={
        philip:'😃',
        pierre:'😎'
       }
       return Promise.resolve(Nom[name]);
    }
    getName('philip')
    .then(v=>{
        let a =v;
        return getName('pierre')
        .then(v=>{
            let b=v;
            console.log(a,b);
        })
    });
