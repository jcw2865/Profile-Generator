# Homework-9
Homework-9

The purpose of this project was to build a command line application that prompts the user for their favorite color and their GitHub username. The program would then take the user's input and produce a PDG with information from the user's GitHub, styled with their favorite color. The criteria for a successful program are below: 

* The user is prompted to answer two questions: 1. "What is your favorite color?", 2. "What is your GitHub username?".

* A PDF is generated that displays the user's GitHub profile picture, name, location, bio, number of public repositories, number of followers, number of other GitHub users they're following, and number of GitHub stars.

* The PDF should be styled according to the user's input for the question, "What is your favorite color?". 

## Getting Started

The deployed project should look like this.

![DeployedProject](deployed.gif)

Below is the link to the project repository followed by the link to the PDF generated for me. 

https://github.com/jcw2865/homework-9

https://drive.google.com/drive/u/0/folders/1zbrokYYLcrQsrTtnE-xKfYFROUL9LEVE

### Development

Below are the steps I took to create the project as it is so far. In creating this project, I started over numerous times after discovering I had began incorrectly. So, to be more precise, below are the steps I took in my most recent attempt to create the project. 

1. Created index.html, style.css, and index.js. 

2. Downloaded all dependecies using npm. 

3. Created user prompts with inquirer.

4. Took the input from the user prompts and used them in axios calls to GitHub. 

5. Consolidated GitHub data.

6. Created the template I wanted to use for my HTML document (which would eventually be displayed via PDF).

7. Created the function that would send data to the HTML document, then to PDF format. 

## Testing

The majority of the time I spent working on this project was spent trying to get the user's GitHub data to display. Creating Axios requests was similar to AJAX requests, so I understood the logic fairly quickly. In order to display the user's GitHub data, I had to place console logs at numerous points throughout the program to determine where const/var/let declarations ended due to scoping. 

## Deployment

This program can be deployed using most internet browsers via the links in the "Getting Started" section. 

## Built With

* [VSCode](https://code.visualstudio.com/) - The platform I used for developing this project.
* [MDN](https://developer.mozilla.org/en-US/) - Used as a reference tool.
* [GoogleChrome](https://www.google.com/chrome/) - Used for inspector tool and validating the program during development. 
* [NodePackageManager](https://www.npmjs.com/) - Used to install node modules/dependencies
* [Axios](https://www.npmjs.com/package/axios) - Used as a promise based HTTP client for the browser and node.js.
* [Util](https://www.npmjs.com/package/util) - This implements the Node.js util module for environments that do not have it, like browsers.
* [Inquirer](https://www.npmjs.com/package/inquirer) - A collection of common interactive command line user interfaces.
* [html-pdf](https://www.npmjs.com/package/html-pdf) - HTML to PDF converter that uses phantomjs.
* [ImgFlip](https://imgflip.com/gif-maker) - Used to create the GIF found in the "Getting Started" section.
<!-- ## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us. -->

## Authors

* **Jake Walker** - [jcw2865](https://github.com/jcw2865)

<!-- See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project. -->

<!-- ## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details -->

## Acknowledgments

* The advisors, instructors, and TAs at the Coding Bootcamp at the University of Texas at Austin
* Tutoring staff at Trilogy
* Fellow classmates at the Coding Bootcamp at UT-Austin
* Friends in the industry