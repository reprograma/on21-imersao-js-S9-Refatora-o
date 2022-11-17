var menu = [
  {
    id: 1,
    nome: "Refrigerante",
    preco: 3.5,
    sabor: "Morango",
    marca: "refriKeylinha",
  },
  {
    id: 2,
    nome: "Suco",
    preco: 2.5,
    sabor: "Uva",
    marca: "suquinhoKeylinha",
  },
  {
    id: 3,
    nome: "Chá",
    preco: 3.0,
    sabor: "Mate",
    marca: "mateKeylinha",
  },
];

function ofertaMenu() {
  var escolha = Number(
    prompt(`Informe o numero que deseja informações:
    1- Refrigerante
    2- Suco
    3- Chá`)
  );

  const [filtroPedido] = menu.filter((element) => element.id === escolha);
  const chave = ["nome", "preco", "sabor", "marca"];
  //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

  https: if (escolha) chave.forEach((info) => console.log(filtroPedido[info]));
}
ofertaMenu();
var retornaMenu = confirm("Deseja retornar ao menu?");
while (retornaMenu == true) {
  ofertaMenu();
}
