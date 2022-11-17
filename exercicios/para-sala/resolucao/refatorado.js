// Exercicio para a Sala - Refatore o código abaixo:

let listDrinks = [
    {
      id: 1,
      name: "Refrigerante",
      price: 3.5,
      flavor: "Morango",
      brand: "RefriKeylinha",
      bio: `Name: ${listDrinks[0].name}
      Price: ${listDrinks[0].price}
      flavor: ${listDrinks[0].flavor}
      brand: ${listDrinks[0].brand}`,
    },
    {
      id: 2,
      name: "Suco",
      price: 2.5,
      flavor: "Uva",
      brand: "SuquinhoKeylinha",
      bio: `Name: ${menu[1].name}
      Preço: ${listDrinks[1].price}
      flavor: ${listDrinks[1].flavor}
      brand: ${listDrinks[1].brand}`,
    },
    {
      id: 3,
      name: "Chá",
      price: 3.0,
      flavor: "Mate",
      brand: "MateKeylinha",
      bio: `Name: ${listDrinks[2].name}
      Preço: ${listDrinks[2].price}
      flavor: ${listDrinks[2].flavor}
      brand: ${listDrinks[2].brand}`,
    },
  ];
  
  function showMenu() {
    let choose = Number(
      prompt(`Informe o numero que deseja informações:
      1- Refrigerante
      2- Suco
      3- Chá`)
    );
  
    switch (choose) {
      case 1:
        alert(listDrinks[0].bio);
        break;
      case 2:
        alert(listDrinks[1].bio);
        break;
      case 3:
        alert(listDrinks[2].bio);
        break;
    }
  }
  showMenu();
  let backToMenu = confirm("Deseja retornar ao menu?");
  while (backToMenu == true) {
    showMenu();
  }
  