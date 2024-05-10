fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => {
        if (!response.ok) {
            throw new Error('La red no responde.');
        }
        return response.json();
    })

    .then(data => { 
        console.log(data); 
    })
    .catch(error => {
        console.error('Hay un problema a la hora de hacer fetch:', error);
    });