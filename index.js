const apiUrl = 'https://www.boredapi.com/api/activity';

// DOM elements 
const fetchActivityBtn = document.getElementById('fetch-activity-btn');
const activity1 = document.getElementById('activity');
const activityList1 = document.getElementById('activity-list');
const toggleModeBtn = document.getElementById('toggleModeBtn');
const body1 = document.querySelector('body')

// Event listeners 
fetchActivityBtn.addEventListener('click', fetchActivity);
toggleModeBtn.addEventListener('click', () => {
    body1.classList.toggle('dark');
    body1.classList.toggle('light');
}); 



// Fetch a random activity from the API
function fetchActivity(){
fetch(apiUrl)
.then(response => response.json())
.then(data => activity1.innerText = data.activity)
.catch(error => console.error(error));
}