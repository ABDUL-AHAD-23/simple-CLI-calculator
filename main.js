#! /usr/bin/env node
console.log(chalk.yellowBright("WELCOM ON AHAD CALCULATOR"));
import chalk from "chalk";
import inquirer from "inquirer";
var answer = await inquirer.prompt([{
        name: "firstnumber",
        type: "number",
        message: "ENTER FIRST NUMBER"
    }, {
        name: "secondnumber",
        type: "number",
        message: "ENTER SECOND NUMBER"
    }, {
        message: "SELECT ANY ONE OPERATOR",
        name: "operator",
        type: "list",
        choices: ["ADDITION +", "SUBTRACTION -", "MULTIPLICATION *", "DIVISION /", ""]
    }]);
if (answer.operator === "ADDITION +") {
    console.log(chalk.green(answer.firstnumber + answer.secondnumber));
}
else if (answer.operator === "SUBTRACTION -") {
    console.log(chalk.yellowBright(answer.firstnumber - answer.secondnumber));
}
else if (answer.operator === "MULTIPLICATION *") {
    console.log(chalk.blueBright(answer.firstnumber * answer.secondnumber));
}
else if ((answer.operator === "DIVISION /")) {
    console.log(chalk.blue(answer.firstnumber / answer.secondnumber));
}
else {
    for (let index = 0; index < 7; index++) {
        console.log(chalk.redBright("invalid number or operator"));
    }
}
