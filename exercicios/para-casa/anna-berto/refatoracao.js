/*Assim que a função for iniciada, um menu deve ser ofertado ao usuário com  a lista de bebidas disponíveis. Ao escolher uma, as principais características devem ser exibidas (Nome, Preço, Marca e Sabor).
O Usuário deve ter a opção de voltar para o menu após a seleção de uma bebida.*/

const drinksMenu = [
  {
    id: 1,
    name: "Soda",
    price: 3.5,
    flavor: "strawberry",
    brand: "SodaKeylinha",
    bio: `name: ${this.name}
  Preço: ${this.price}
  flavor: ${this.flavor}
  Marca: ${this.brand}`,
  },
  {
    id: 2,
    name: "Juice",
    price: 2.5,
    flavor: "Grape",
    brand: "JuiceKeylinha",
    bio: `name: ${this.name}
  Preço: ${this.price}
  flavor: ${this.flavor}
  brand: ${this.brand}`,
  },
  {
    id: 3,
    name: "Tea",
    price: 3.0,
    flavor: "Tea",
    brand: "TeaKeylinha",
    bio: `name: ${this.name}
  Preço: ${this.price}
  flavor: ${this.flavor}
  brand: ${this.brand}`,
  },
];

function offerMenuDrinks() {
  let chosenDrink = Number(
    prompt(`Enter the number you want information:
    1- Soda
    2- Juice
    3- Tea`)
  );

  switch (chosenDrink) {
    case 1:
      alert(drinksMenu.bio);
      break;
    case 2:
      alert(drinksMenu.bio);
      break;
    case 3:
      alert(drinksMenu.bio);
      break;
  }
}
offerMenuDrinks();
let returnDrinksMenu = confirm("Do you want to return to the menu?");
while (returnDrinksMenu == true) {
  offerMenuDrinks();
}
