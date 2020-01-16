var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
    {
        type: "input",
        name: "favoriteColor",
        message: "Hello, what is your favorite color?"
    }
])