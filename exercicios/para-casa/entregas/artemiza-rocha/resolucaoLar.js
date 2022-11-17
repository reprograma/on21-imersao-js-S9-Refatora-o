/* Vamos refatorar em sala o projeto Exercício Semana 8 - Resolução professora . Salve o antigo projeto e identifique as mudanças feitas durante o processo de refatoração. */

//Código Refatorado :

//A Refatoração é feita para melhorar interna do código fonte.
//A refatoração não altera o produto final(software/aplicação);

let menuDrink = [
  {
    id: 1,
    name: "Soda",
    price: 5.5,
    flavor: "Lemon",
    brand: "SodaMiza",
  },
  {
    id: 2,
    name: "Juice",
    price: 3.0,
    flavor: "Mango",
    brand: "JuiceMiza",
  },
  {
    id: 3,
    name: "Tea",
    price: 4.0,
    flavor: "Fennel",
    brand: "FennelMiza",
  },
];

function menuAvailable() {
  let select = Number(
    prompt(`Select the desired number: 
      1- Soda
      2- Juice
      3- Tea`)
  );

  switch (select) {
    case 1:
      alert(`
          Name: ${menuDrink[0].name}
          Price: ${menuDrink[0].price}
          Flavor: ${menuDrink[0].flavor}
          Brand: ${menuDrink[0].brand}`);
      break;
    case 2:
      alert(`
          Name: ${menuDrink[1].name}
          Price: ${menuDrink[1].price}
          Flavor: ${menuDrink[1].flavor}
          Brand: ${menuDrink[1].brand}`);
      break;
    case 3:
      alert(`
          Name: ${menuDrink[2].name}
          Price: ${menuDrink[2].price}
          Flavor: ${menuDrink[2].flavor}
          Brand: ${menuDrink[2].brand}`);
      break;
  }
}
menuAvailable();
let backMenu = confirm("Do you want to return to the menu?");
while (backMenu == true) {
  menuAvailable();
}
