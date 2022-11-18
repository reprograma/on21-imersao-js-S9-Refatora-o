const promptSync = require('prompt-sync')
const drinksList = require('./drinksList')

const prompt = promptSync()

function menuDrinkMachine() {
  console.log(
    `Enter the number you want information on:
    1- Soda
    2- Juice
    3- Tea`
  )

  const drinkChoice =Number(prompt())
  let selectDrink = drinksList.find(drink => drink.id === drinkChoice)
  if(selectDrink){
    console.log(selectDrink)
  }
}
menuDrinkMachine();

let backToMenu = prompt(`Back to menu? Press y or n `);
while (backToMenu == "y") {
  menuDrinkMachine();
}
