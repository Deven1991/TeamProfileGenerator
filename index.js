const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { generateTemplate } = require("./src/template")

var answers = [];
const mainQuestions = [{
    type: "input",
    message: "Input the name of the Employee",
    name: "name",
    validate: string => string.length > 0 ? true : "You must include a name."
},
{
    type: "input",
    message: "Input the ID of the Employee",
    name: "id",
    validate: string => string.length > 0 ? true : "You must include an ID."
},
{
    type: "input",
    message: "Input the e-mail of the Employee",
    name: "email",
    validate: string => string.includes("@") ? true : "You must include a valid e-mail."
},
{
    type: "list",
    message: "Input the role of the Employee",
    name: "role",
    choices: ["Manager", "Intern", "Engineer"],
},
{
    type: "input",
    message: "Input the office number of the Manager",
    name: "officeNumber",
    validate: string => string.length > 0 ? true : "You must input an office number.",
    when: response => response.role === "Manager",
},
{
    type: "input",
    message: "Input the name of the school for the Intern",
    name: "school",
    validate: string => string.length > 0 ? true : "You must input a school.",
    when: response => response.role === "Intern",
},
{
    type: "input",
    message: "Input the Github username of the Engineer",
    name: "github",
    when: response => response.role === "Engineer",
    //github usernames are min. 4 characters long
    validate: string => string.length >= 4 ? true : "Your github username cannot be less than four characters."
}
]

function init() {
    inquirer.prompt(mainQuestions)
        .then((response) => {
            //using the classes and pushing the response to the questions into an empty array called Answers
            if (response.role === "Manager") {
                answers.push(new Manager(response.name, response.id, response.email, response.officeNumber))
            } else if (response.role === "Intern") {
                answers.push(new Intern(response.name, response.id, response.email, response.school))
            } else if (response.role === "Engineer") {
                answers.push(new Engineer(response.name, response.id, response.email, response.github))
            }
            inquirer.prompt([
                {
                    type: "checkbox",
                    message: "Do you want to add more Employees to this team?",
                    name: "continue",
                    choices: ["Yes", "No"]
                }])
                .then((check) => {
                    //Checking to see if user wants to continue with adding more employees to team
                    if (check.continue === "Yes") {
                        init();
                    }
                    if (check.continue === "No") {
                        writeHTML(answers)
                        console.log("final", answers)
                    }
                })
        })
}

function writeHTML(answers) {
    fs.writeFile(`./Team.html`, generateTemplate(answers), (err) => err ? console.error(err) : console.log('Success! HTML created.'));
}

//Calling the  function
init();