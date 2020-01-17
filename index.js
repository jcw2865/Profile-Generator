const fs = require('fs');
const axios = require("axios");
const inquirer = require("inquirer");
// const writeFileAsync = util.promisify(fs.writeFile);


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
        <div id="photo"></div>
        <div id="name"></div>
        <div id="username">${username}</div>
        <div id="bio"></div>
        <div id="location"></div>
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

        // Create a const for an introduction using the username
        const greeting = `Hello, my username is ${username}. \n`;
        fs.writeFile("data.txt", greeting, function (err) {
            if (err) {
                throw err;
            }
        })

        // ###############
        // REPOS AXIOS
        // ###############

        // Create a const for the axios url using github api for a user's repos
        const reposUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

        // Axios request to get repo data for given username
        axios.get(reposUrl).then(function (res) {

            // Create a const for the identification of the number of repositories
            const repoNum = "Public Repositories: " + res.data.length + ". \n";

            // console.log(repoNum);

            // Create a new file called "repos.txt" and add the const repoNamesStr
            fs.appendFile("data.txt", repoNum, function (err) {
                if (err) {
                    throw err;
                }
            });
        });

        // ###############
        // FOLLOWERS AXIOS
        // ###############

        // Create a const for a new axios url using github api for a user's followers
        const followersUrl = `https://api.github.com/users/${username}/followers`;

        // Axios request to get the follower data for a given username
        axios.get(followersUrl).then(function (res) {

            // Create a const for the identification of the number of followers
            const followers = "Followers: " + res.data.length + ". \n";
            // console.log(followers);

            // Append "repos.txt" and add the const followers
            fs.appendFile("data.txt", followers, function (err) {
                if (err) {
                    throw err;
                }
            });
        });

        // ###############
        // FOLLOWING AXIOS
        // ###############

        // Create a const for a new axios url using github api for the number of other users the given user is following
        const followingUrl = `https://api.github.com/users/jcw2865/following`;

        // Axios request to get the following data for a given username
        axios.get(followingUrl).then(function (res) {

            // Create a const for the identification of the number of user the given user is following
            const following = "Following: " + res.data.length + ". \n";
            // console.log(following);

            // Append "data.txt" and add the const following
            fs.appendFile("data.txt", following, function (err) {
                if (err) {
                    throw err;
                }
            });
        });

        // ###############
        // STARS AXIOS
        // ###############

        // // Create a const for a new axios url using github api for the number of stars the given user has
        // const starsURL = `https://api.github.com/users/jcw2865/starred`;

        // // Axios request to get the github stars data for a given username
        // axios.get(starsUrl).then(function (res) {

        //     // Create a const for the identification of the number of stars the given user has
        //     const stars = "Stars: " + res.data + ". \n";
        //     console.log(stars);

        //     // Append "data.txt" and add the const stars
        //     fs.appendFile("data.txt", stars, function (err) {
        //         if (err) {
        //             throw err;
        //         }
        //     });
        // });
        // makeHTML(username, repoNum, followers, following);
    });