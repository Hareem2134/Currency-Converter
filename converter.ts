import inquirer from "inquirer";

let currency: { [key: string]: number } = {
  USD: 1,
  EUR: 0.55,
  GBP: 1.72,
  INR: 47.75,
  PKR: 280,
};

let currencyans: any = await inquirer.prompt([
  {
    name: "FirstInput",
    message: "Enter your currency: ",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "SecondInput",
    message: "Enter your currency to convert to: ",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "amount",
    message: "Enter the amount: ",
    type: "number",
    validate: (input) => !isNaN(input) || "Please enter a valid number",
  },
]);

let firstAmount = currency[currencyans.FirstInput];
let secondAmount = currency[currencyans.SecondInput];
let amount = currencyans.amount;

let baseAmount = amount / firstAmount;
let convertedAmount = baseAmount * secondAmount;

console.log(convertedAmount);
