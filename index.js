const apiUrl = 'https://www.boredapi.com/api/activity';

// DOM elements 
const fetchActivityBtn = document.getElementById('fetch-activity-btn');
const activity1 = document.getElementById('activity');
const activityList1 = document.getElementById('activity-list');

fetchActivityBtn.addEventListener('click', fetchActivity);

function fetchActivity(){
fetch(apiUrl)
.then(response => response.json())
.then(data => activity1.innerText = data.activity)
.catch(error => console.error(error));
}