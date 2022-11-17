/* Vamos refatorar em sala o projeto Exercício Semana 8 - Resolução professora . Salve o antigo projeto e identifique as mudanças feitas durante o processo de refatoração. */

//código antigo

var menu = [
  {
    id: 1,
    nome: "Refrigerante",
    preco: 3.5,
    sabor: "Morango",
    marca: "RefriKeylinha",
  },
  {
    id: 2,
    nome: "Suco",
    preco: 2.5,
    sabor: "Uva",
    marca: "SuquinhoKeylinha",
  },
  {
    id: 3,
    nome: "Chá",
    preco: 3.0,
    sabor: "Mate",
    marca: "MateKeylinha",
  },

{
    id: 4,
    Final: "go out",
  },

];
function ofertaMenu() {
  var escolha = Number(
    prompt(`Informe o numero que deseja informações:
    1- Refrigerante
    2- Suco
    3- Chá
    4- Go out`)
  );

  switch (escolha) {
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
ofertaMenu();
var retornaMenu = confirm("Deseja retornar ao menu?");
while (retornaMenu == true) {
  ofertaMenu();
}
