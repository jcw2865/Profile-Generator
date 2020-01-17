const fs = require('fs');
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const photo = "";
const name = "";
const username = "";
const bio = "";
const location = "";
const repoNum = "";
const followers = "";
const following = "";


// Create a function that will generate an HTML doc
function makeHTML() {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Profile Generator</title>
</head>

<body>
    <div id="header">
        <div id="photo">${photo}</div>
        <div id="name">${name}</div>
        <div id="username">${username}</div>
        <div id="bio">${bio}</div>
        <div id="location">${location}</div>
        <div id="ghurl"></div>
        <div id="blogurl"></div>
    </div>
    <div id="data">
        <div id="repositories">${repoNum}</div>
        <div id="followers">${followers}</div>
        <div id="ghStars"></div>
        <div id="following">${following}</div>
    </div>

</body>

</html>
    `
};

// Prompt user for favorite color and github username
inquirer.prompt([
    {
        type: "input",
        name: "favoriteColor",
        message: "Hello, what is your favorite color?"
    },
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username: "
    }
])

    // Create a function based off of the given username
    .then(function ({ username }) {

        // ##########
        // AXIOS
        // ##########

        // Create a const for the axios url for the github user's data
        const userInfoUrl = `https://api.github.com/users/${username}`;

        // Axios request to get user data for given username
        axios.get(userInfoUrl).then(function (res) {
            // Create a const for the user's photo
            const photo = `<img src="${res.data.avatar_url}" alt="User Photo">`
            console.log(photo);
            // Create a const for the user's name
            const name = res.data.name;
            console.log(name);
            // Create a const for the user's bio
            const bio = res.data.bio;
            console.log(bio);
            // Create a const for the user's location
            const location = res.data.location;
            console.log(location);
            // Create a const for the identification of the number of repositories
            const repoNum = "Public Repositories: " + res.data.public_repos;
            console.log(repoNum);
            // Create a const for the identification of the number of followers
            const followers = "Followers: " + res.data.followers;
            console.log(followers);
            // Create a const for the identification of the number of users the given user is following
            const following = "Following: " + res.data.following;
            console.log(following);

        });

        const html = makeHTML();
        return writeFileAsync("index.html", html);
    })
    .catch(function (err) {
        console.log(err);
        console.log("Whoops, something's not right. ");
    });