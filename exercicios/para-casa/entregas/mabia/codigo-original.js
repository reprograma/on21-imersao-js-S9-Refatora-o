var menu = [
  {
    id: 1,
    nome: "Refrigerante",
    preco: 3.5,
    sabor: "Morango",
    marca: "kwat",
  },
  {
    id: 2,
    nome: "Suco",
    preco: 2.5,
    sabor: "Uva",
    marca: "ki-suco",
  },
  {
    id: 3,
    nome: "Chá",
    preco: 3.0,
    sabor: "Mate",
    marca: "kombucha",
  },
];
function offerMenu() {
  var choose = Number(
    prompt(`Qual produto deseja? 
    1- Refrigerante
    2- Suco
    3- Chá`)
  );

  switch (choose) {
    case 1:
      alert(`
        Nome: ${menu[0].nome}
        Preço: ${menu[0].preco}
        Sabor: ${menu[0].sabor}
        Marca: ${menu[0].marca}`);
      break;
    case 2:
      alert(`
        Nome: ${menu[1].nome}
        Preço: ${menu[1].preco}
        Sabor: ${menu[1].sabor}
        Marca: ${menu[1].marca}`);
      break;
    case 3:
      alert(`
        Nome: ${menu[2].nome}
        Preço: ${menu[2].preco}
        Sabor: ${menu[2].sabor}
        Marca: ${menu[2].marca}`);
      break;
  }
}
offerMenu();
var returnMenu = confirm("Deseja retornar ao menu?");
while (returnMenu == true) {
  offerMenu();
}
