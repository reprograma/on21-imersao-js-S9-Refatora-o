let menu = [
  {
    id: 1,
    name: 'Soda',
    price: 3.5,
    flavor: 'Strawberry',
    brand: 'SodaKeylinha',
  },
  {
    id: 2,
    name: 'Juice',
    price: 2.5,
    flavor: 'Grape',
    brand: 'JuiceKeylinha',
  },
  {
    id: 3,
    name: 'Tea',
    price: 3.0,
    flavor: 'Herb Tea',
    brand: 'TeaKeylinha',
  },
];
function drinkMachine() {
  let choiceDrink = Number(
    prompt(`Choice the number you want information on:
  1- Soda
  2- Juice
  3- Tea`)
  );

  switch (choiceDrink) {
    case 1:
      alert(`
      Name: ${menu[0].name}
      Price: ${menu[0].price}
      Flavor: ${menu[0].flavor}
      Brand: ${menu[0].brand}`);
      break;
    case 2:
      alert(`
      Name: ${menu[1].name}
      Price: ${menu[1].price}
      Flavor: ${menu[1].flavor}
      Brand: ${menu[1].brand}`);
      break;
    case 3:
      alert(`
      Name: ${menu[2].name}
      Price: ${menu[2].price}
      Flavor: ${menu[2].flavor}
      Brand: ${menu[2].brand}`);
      break;
  }
}
drinkMachine();
let backToMenu = confirm('Do you want to return to the menu?');
while (backToMenu == true) {
  drinkMachine();
}
