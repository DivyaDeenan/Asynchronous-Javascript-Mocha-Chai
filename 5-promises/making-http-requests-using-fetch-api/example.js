// Example of using Fetch API
const fetch = require("node-fetch");
fetch('https://www.omdbapi.com/?s=batman&y=2018&apikey=ddf2509e')
    .then(response => {
        console.log(response);        
        return response
    })
    .then(response => response.json())
    .then(data => console.log(data))
