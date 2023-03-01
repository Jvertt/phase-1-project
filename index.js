const apiUrl = 'https://rickandmortyapi.com/api/character'

function fetchData(url){
    return fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error(`Network error: ${response.status}`);
        }
        return response.json();
    })
}

// event listener for search button

document.getElementById('searchButton').addEventListener("click", () => {
    const searchTerm = document.getElementById('searchInput').value;
    fetchData(`${apiUrl}?name=${searchTerm}`)
    .then(characters => renderCharacters(characters.results))
    .catch(error => console.error(error));
})

function renderCharacters(characters) {
    const charactersList = document.getElementById('charactersList')
    charactersList.innerHtml = '';

    characters.forEach((character) => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <div class ="name">${character.name}</div>
        <div class="species">${character.species}</div>
        <div class="status">${character.status}</div>
        `;
        charactersList.appendChild(card);
    })
}