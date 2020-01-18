# Homework-9
Homework-9

The purpose of this project was to build a command line application that prompts the user for their favorite color and their GitHub username. The program would then take the user's input and produce a PDG with information from the user's GitHub, styled with their favorite color. The criteria for a succesful project is as follows:

* The current date and time is displayed in the header, and updates at regular intervals.

* Each hour between 9am and 5pm should have its own row. That row as a whole should have: the hour, an input box, and a save button.

* Users should be able to enter text into the input box, save their input with the save button, and be able to refresh the page and see their saved input. 

* Each hour row should change colors whether the hour represents time that has passed, the current hour, or the future.

## Getting Started

The deployed project should look like this.

![DeployedProject](WorkDayScheduler.png)

Below is the link to the project repository followed by the link to the live website. 

https://github.com/jcw2865/homework-5

https://jcw2865.github.io/homework-5/

### Development

Below are the steps I took to create the project as it is so far. In creating this project, I attempted to be a little more disciplined in my structuring and labeling with comments. This project did require an extensive amount of research with regards to moment.js and setItem/getItem. 

1. Created index.html, style1.css, moment.js, and script.js. 

2. General HTML document structure added to index.html. 

3. Linked additional documents and stylesheets to index.html.

4. Developed functionality with the buttons. Verified with click alerts and added variables as needed. 

5. After creating the buttons and verifying their functionality, I focused on the setItem functionality.

6. Once I saw that the setItem functions were storing information in the inspector, I created the getItem functions. 

7. Heavy research into moment.js to figure out how to use setInterval and how to set conditional color functions.

## Testing

Given that the whole point of this project was for users to have their own personal daily planner, I frequentyly referenced the application section inside of the Google Chrome Inspector to verify that the users input was being stored there (and stored in the correct format). Additionally, there was a lot of experimenting with the moment format. Since I used conditional statements to change the colors of the input boxes, I had to create variables that used moment.js but in military time so I could use greater-than/less-than statements. 

## Deployment

This program can be deployed using most internet browsers via the links in the "Getting Started" section. 

## Built With

* [VSCode](https://code.visualstudio.com/) - The platform I used for developing this project.
* [Bootstrap](https://getbootstrap.com/) - Used their stylesheet templates.
* [W3Schools](https://www.w3schools.com/) - Used as a reference tool.
* [MDN](https://developer.mozilla.org/en-US/) - Used as a reference tool.
* [GoogleChrome](https://www.google.com/chrome/) - Used for inspector tool and validating the program during development. 
* [Moments.js](https://momentsjs.com/) - Use their moment.js sheets and functions.

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