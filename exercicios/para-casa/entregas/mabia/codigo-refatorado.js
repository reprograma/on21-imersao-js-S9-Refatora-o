const fixedListDrinks = [
  {
    id: 1,
    name: "Soda",
    price: 3.5,
    flavor: "Strawberry",
    brand: "kwat",
  },
  {
    id: 2,
    name: "Juice",
    price: 2.5,
    flavor: "Grape",
    brand: "ki-suco",
  },
  {
    id: 3,
    name: "Tea",
    price: 3.0,
    flavor: "Mate",
    brand: "kombucha",
  },
];

function showMenu() {
  const choose = Number(
    prompt(`Choose your drink: 
        1- Soda
        2- Juice
        3- Tea`)
  );
  switch (choose) {
    case 1:
      alert(`
      Name: ${fixedListDrinks[0].name}
      Price: ${fixedListDrinks[0].price}
      Flavor: ${fixedListDrinks[0].flavor}
      Brand: ${fixedListDrinks[0].brand}`);
      break;
    case 2:
      alert(`
      Name: ${fixedListDrinks[1].name}
      Price: ${fixedListDrinks[1].price}
      Flavor: ${fixedListDrinks[1].flavor}
      Brand: ${fixedListDrinks[1].brand}`);
      break;
    case 3:
      alert(`
      Name: ${fixedListDrinks[2].name}
      Price: ${fixedListDrinks[2].price}
      Flavor: ${fixedListDrinks[2].flavor}
      Brand: ${fixedListDrinks[2].brand}`);
      break;
  }
}
showMenu();

const backToMenu = confirm("Do you want to return?");
while (backToMenu == true) {
  showMenu();
}
