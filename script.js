// https://pokeapi.co/docs/v2#pokemon

const fetchPokemonData = async () => {
    try {
        for (let id = 1; id <= 151; id++) {
            const apiURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
            const response = await fetch(apiURL);
            const data = await response.json();
            console.log(
                data.id, 
                data.name, 
                data.sprites.front_default,
                data.types.map(type => type.type.name)
            );

            const container = document.getElementById("container-grid");
            const card = document.createElement("div");
            card.classList.add("container-card");
            card.innerHTML=
            `
            <div class="card">
                <h3 class="title"> ${data.name} (${data.id}) </h3>
                <img src="${data.sprites.front_default}" alt="Dibujo de Pikachu.">
                <p class="desc"> ${data.types.map(type => type.type.name)} </p>
            </div>
            `;
            container.appendChild(card);
        }
    } 
    catch (error) {
        console.error('Hay un problema a la hora de hacer fetch:', error);
    }
}

fetchPokemonData();