const machineItems = require("./machineItems");
const readline = require("readline-sync");

function addDrink(drinkName, value) {
  let menuItem = machineItems.find(
    (machineItems) => machineItems.name === drinkName
  );
  let newAmount = (menuItem.amount += value);
  return "drinks added successfully";
};

function printMenu() {
  const menu = machineItems.map(
    (machineItems) => `${machineItems.name} , price ${machineItems.price}`
  );
  console.table(menu);
  console.log("These are the drinks available");
};

const cart = [];

function chooseDrink(){
  const choose = readline.question("Which drink do you want? ");
  cart.push(choose);
  const wantMore = readline.question(`Want some more drink? yes/no `);
  if (wantMore === 'yes'){
    return chooseDrink();
  }
};

function enter() {
  printMenu();
  chooseDrink();
  console.log(`Purchase summary follows ${cart}. Remove your drink `);
};

console.log(enter());

/*
Código antigo

const machineItems = require('./machineItems');
const readline = require('readline-sync');

const menu =  machineItems.map(machineItems=> (`${machineItems.name} , price ${machineItems.price} ,`));
const entrance = readline.question('How about a drink? yes / no ');
const drinkChoice = readline.question ('❤️ Enter the name of the drink you want ❤️');


if (entrance === 'yes'){
  console.table(menu); 
  const drinkChoice = readline.question ('❤️ Enter the name of the drink you want ❤️');
  const answer = machineItems.find(machineItems => machineItems.name === drinkChoice);
  console.log(answer);
}
else{
  console.table(`These are the drinks available: ${ menu }}`);
};

const final = console.log(`Retire sua bebida`);

export default drinkChoice; 
*/