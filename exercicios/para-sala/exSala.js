//Exercício para a Sala - Refatore o código abaixo:
let menuDrinks = [
  {
    id: 1,
    name: 'Refrigerante',
    price: 3.5,
    flavor: 'Morango',
    brand: 'RefriKeylinha',
    bio: `Nome: ${menuDrinks[0].name}
    Preço: ${menuDrinks[0].price}
    Sabor: ${menuDrinks[0].flavor}
    Marca: ${menuDrinks[0].brand}`,
  },
  {
    id: 2,
    name: 'Suco',
    price: 2.5,
    flavor: 'Uva',
    brand: 'SuquinhoKeylinha',
    bio: `Nome: ${menuDrinks[1].name}
    Preço: ${menuDrinks[1].price}
    Sabor: ${menuDrinks[1].flavor}
    Marca: ${menuDrinks[1].brand}`,
  },
  {
    id: 3,
    name: 'Chá',
    price: 3.0,
    flavor: 'Mate',
    brand: 'MateKeylinha',
    bio: `Name: ${menuDrinks[2].name}
    Price: ${menuDrinks[2].price}
    Flavor: ${menuDrinks[2].flavor}
    Brand: ${menuDrinks[2].brand}`,
  },
];

function ofertaMenu() {
  let choiceDrink = Number(
    prompt(`Informe o número da bebida que deseja informações:
    1- Refrigerante
    2- Suco
    3- Chá `)
  );

  switch (choiceDrink) {
    case 1:
      alert(menuDrinks[0].bio);
      break;
    case 2:
      alert(menuDrinks[1].bio);
      break;
    case 3:
      alert(menuDrinks[2].bio);
      break;
    default:
      console.log('Try again');
      break;
  }
}
ofertaMenu();
let retornaMenu = confirm('Deseja retornar ao menu?');
while (retornaMenu == true) {
  ofertaMenu();
}
