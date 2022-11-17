const listaDeBebidas = [
  {
    id: 1,
    nome: "Refrigerante",
    preco: 3.5,
    sabor: "Morango",
    marca: "Refrigerante",
  },
  {
    id: 2,
    nome: "Suco",
    preco: 2.5,
    sabor: "Uva",
    marca: "Suco",
  },
  {
    id: 3,
    nome: "Chá",
    preco: 3.0,
    sabor: "Mate",
    marca: "Chá",
  },
];

function buscarBebida(bebidaId) {
  const bebidaEscolhida = listaDeBebidas.filter(
    (bebida) => bebida.id == bebidaId
  );
  return bebidaEscolhida[0];
}

function formataBioBebida(bebidaId) {
  const bebidaEscolhida = buscarBebida(bebidaId);
  return (
    "Nome: " +
    bebidaEscolhida.nome +
    "\n" +
    "Preço: " +
    bebidaEscolhida.preco +
    "\n" +
    "Sabor: " +
    bebidaEscolhida.sabor +
    "\n" +
    "Marca: " +
    bebidaEscolhida.marca
  );
}

function ofertaMenu() {
  let menuBebidas = "";

  listaDeBebidas.forEach((bebida) => {
    menuBebidas += "\n" + bebida.id + "- " + bebida.nome;
  });

  let escolhaDoUsuario = Number(
    prompt("Informe o numero que deseja informações:" + menuBebidas)
  );

  alert(formataBioBebida(escolhaDoUsuario));

  retornaAoMenu();
}

function retornaAoMenu() {
  let retornaMenu = confirm("Deseja retornar ao menu?");
  if (retornaMenu == true) {
    ofertaMenu();
  } else return false;
}

ofertaMenu();
