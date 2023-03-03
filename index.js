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

// dark mode toggle

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const characterCards = document.querySelectorAll('.character-card');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    characterCards.forEach((card) => card.classList.toggle('dark-mode'));
})

// event listener for search input

document.getElementById('searchInput').addEventListener('input', (event) =>{
    const searchTerm = event.target.value
fetchData(`${apiUrl}?name=${searchTerm}`)
.then(characters => renderCharacters(characters.results))
.catch(error => console.error(error));
})


// event listener that allows use to press enter to search

document.getElementById('searchInput').addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        const searchTerm = document.getElementById('searchInput').value;
        fetchData(`${apiUrl}?name=${searchTerm}`)
        .then(characters => renderCharacters(characters.results))
        .catch(error => console.error(error));
    }
})

// function to render character cards
function renderCharacters(characters) {
    const charactersList = document.getElementById('charactersList')
    charactersList.innerHTML = '';

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