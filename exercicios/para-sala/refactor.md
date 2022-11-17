<!-- ### <img src="https://media.giphy.com/media/VgCDAzcKvsR6OM0uWg/giphy.gif" width="50">  Refactoring -->

# <img src="../../assets/octocat-removebg-preview.png" width="200"  align="left" > Code Refactoring

---
“Whenever I have to think to understand what the code is doing, I ask myself if I can refactor the code to make that understanding more immediately apparent.”

― Martin Fowler, Refactoring: Improving the Design of Existing Code

---
## Points to refactor
* Convert code to English in its entirety, including variables names, function names and messages to the user

* Separate fixedDrinksMenu in another file for better organization (something like a database)
```
on21-imersao-js-s9-refatoracao
├── assets
├── exercicios
│   ├── para-casa
│   ├── para-sala
│   ├── ├── fixedDrinksMenu.js
│   ├── ├── refactoredExercise.js
├── material
├── README.md
```

* Include the id property in fixedDrinksMenu objects to enable the use of filter method (an array method) to iterate, filter and return drink from the menu by its id, based on the user's choice
```javascript
 {
    id: 1,
    name: "Soda",
    price: 3.50,
    brand: "Strawberry",
    flavor: "RefriKeylinha"
  }
...
const [chosenDrink] = fixedDrinksMenu.filter(drink => drink.id === chosenAnswer);
```

* Convert functions to arrow functions 
```javascript
function ofertaMenu(){} into const drinksMenu = () => {};
```
* Convert Var variables into const
```javascript
var into const;
```
* Rename functions and variables to make them more intuitive
```javascript
var menu into const fixedDrinksMenu;
var escolha into const chosenAnswer;
var retornaMenu into const returnToMenu;
function ofertaMenu into const drinksMenu;
```
* Use of destructuring to extract values ​​for a variable, allowing the use of forEach method to iterate and print the properties of the chosen drink. Names identical to the properties of the objects in the menu must be used ​​(in the key variable) for comparison purposes, to access their values.
```javascript
const [chosenDrink] = fixedDrinksMenu.filter(drink => drink.id === chosenAnswer);
const key = ["name", "price", "flavor", "brand"];
if (chosenAnswer)
    key.forEach(info => console.log(chosenDrink[info]));
```

* Braces can be omitted in the if conditional, which is allowed if the conditional structure has only one statement, on one line
```javascript
if (chosenAnswer)
  key.forEach(info => console.log(chosenDrink[info]));
```

* Separate the responsibilities of the functions, so that each one has only one responsibility, creating one to list all drinks on the menu and another to return the information of the chosen drink. We would have a drinksMenu function offering the menu and another chosenDrink or listDrinkById (from the line containing 'chosenDrink' using the filter method) to bring the drink by its id. 
```javascript
const chosenDrink = () => {
  const [chosenDrink] = fixedDrinksMenu.filter(drink => drink.id === chosenAnswer);
  const key = ["name", "price", "flavor", "brand"];
    if (chosenAnswer)
      key.forEach(info => console.log(chosenDrink[info]));
}
```

---
## It would be nice
* Rewrite the code to run it in terminal with node, even something simpler like: 
```javascript
const promptSync = require('prompt-sync')
const { fixedDrinksMenu } = require('./fixedDrinksMenu')

const prompt = promptSync()

const returnToMenu = () => {
  console.log(`Press "s" to return to the menu or any key to exit.`);
  const returnToMenu = prompt()
  returnToMenu === 's' ? drinksMenu() : console.log('Thank you, come back soon!')
}

const drinksMenu = () => {
  console.log(`1- Soda\n2- Juice\n3- Tea\n `);
  const chosenAnswer = Number(prompt(`Enter the number of the drink you want more information about: `));

  const chosenDrink = fixedDrinksMenu.find(drink => drink.id === chosenAnswer);
  console.log(chosenDrink)
  returnToMenu()
}
drinksMenu();
```
Here the find method was used to find the drink by its id based on user's choice. 
The ideia of the exercise is just to refactor, without affecting the behavior (as in the case of the farewell message that is so necessary or the question to confirm that you want to return to the menu or exit)...

We could still clear the terminal with console.clear() but in this case the ternary operator which makes the code so concise would have to be changed, improving the user experience which is still better than in the original refactoring. Yeah it could be better in so many different ways!

### Here are just a few ideas =]