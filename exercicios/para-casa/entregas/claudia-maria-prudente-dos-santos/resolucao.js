/*
Exercicio para o lar Semana 8 - Clean Code
Assim que a função for iniciada, um menu deve ser ofertado ao usuário com  a lista de bebidas disponíveis. Ao escolher uma, as principais características devem ser exibidas (Nome, Preço, Marca e Sabor).
O Usuário deve ter a opção de voltar para o menu após a seleção de uma bebida.*/
const menu = [
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
];
function ofertaMenu() {
  const escolha = Number(
    prompt(`Informe o numero que deseja informações:
    1- Refrigerante
    2- Suco
    3- Chá`)
  );

  const itemSelected = menu.find((item) => item.id === escolha);

  alert(`
        Nome: ${itemSelected.nome}
        Preço: ${itemSelected.preco}
        Sabor: ${itemSelected.sabor}
        Marca: ${itemSelected.marca}`);
}
ofertaMenu();
const retornaMenu = confirm("Deseja retornar ao menu?");
while (retornaMenu == true) {
  ofertaMenu();
}
