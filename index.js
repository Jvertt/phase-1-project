const apiUrl = 'https://rickandmortyapi.com/api/character'

function fetchdata(url){
    return fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error(`Network error: ${response.status}`);
        }
        return response.json();
    })
}