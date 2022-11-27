//exercicios feitos pela profa aqui
const prompt = require("prompt-sync")();

let menu = [
  {
    id: 1,
    name: "Soda",
    price: 3.5,
    flavour: "strawberry",
    brand: "RefriKeylinha",

  },
  {
    id: 2,
    name: "Soda",
    price: 3.5,
    flavour: "grape",
    brand: "SuquinhoKeylinha",    
  },
  {
    id: 3,
    name: "Tea",
    price: 3.0,
    flavour: "Mate",
    brand: "MateKeylinha",
  },
];

function offerMenu() {
  let choice = Number(prompt(`Informe o numero que deseja informações:
    1- Soda,
    2- Juice,
    3- Tea`)
);

  switch (choice) {
    case 1: alert(`
      Name: ${menu[0].nome}
      Price: ${menu[0].preco}
      Flavour: ${menu[0].sabor}
      Brand: ${menu[0].marca}`);
          break;
      case 2: alert(`
      Name: ${menu[1].nome}
      Price: ${menu[1].preco}
      Flavour: ${menu[1].sabor}
      Brand: ${menu[1].marca}`);
          break;
      case 3: alert(`
      Name: ${menu[2].nome}
      Price: ${menu[2].preco}
      Flavour: ${menu[2].sabor}
      Brand: ${menu[2].marca}`);
          break;

  }
}
offerMenu();
let returnMenu = confirm("Do you wish to return to menu?");
while (returnMenu == true) {
  offerMenu();
}
