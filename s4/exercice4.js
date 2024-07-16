// Exercice 4: Création d'une fonction de debounce

const debounce = (func, delay) => {
    let debounceTimer;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };
  

  const performSearch = debounce((searchTerm) => {
    // recherche et affichage du terme dans le paramètre
    console.log(`Searching for "${searchTerm}"`);
  }, 300);
  
  // execution de la fonction
  performSearch('example');
  