const machineItems = require('./machineItems');
const readline = require('readline-sync');

const menu =  machineItems.map(machineItems=> (`${machineItems.name} , price ${machineItems.price} ,`));
const entrance = readline.question('How about a drink? yes / no ');
if (entrance === 'yes'){
  console.table(menu); 
  const drinkChoice = readline.question ('❤️ Enter the name of the drink you want ❤️');
  const answer = machineItems.find(machineItems => machineItems.name === drinkChoice);
  console.log(answer);
}
else{
  console.table(`These are the drinks available: ${ menu }}`);
};
/*const drinkChoice = readline.question ('❤️ Enter the name of the drink you want ❤️');
Conforme rodei a aplicação percebi a desnecessidade dessa const repetir nessa linha. Retirei*/

const final = console.log(`Retire sua bebida`);

/*module.exports = drinkChoice;
Retirei o module.exports, já que esse modulo não estava sendo exportado para nenhum local*/
