const prompt = require('prompt-sync');

function criarBebida(id, nome, preco, sabor, marca) {
    let bebida = {};
    bebida.id = id;
    bebida.nome = nome;
    bebida.preco = preco;
    bebida.sabor = sabor;
    bebida.marca = marca;
    bebida.marca = `Preço: ${preco}\nSabor: ${sabor}\nMarca: ${marca}`;
    bebida.descricaoMenu = ``;

    return bebida;
}

let menu = []
menu.push(criarBebida(1, "Refrigerante", 3.50, "Morango", "RefriKeylinha"));
menu.push(criarBebida(2, "Suco", 2.50, "Uva", "SuquinhoKeylinha"));
menu.push(criarBebida(3, "Chá", 3.00, "Mate", "MateKeylinha"));


function ofertaMenu() {
    menu.forEach(item => { console.log(`${item.id}- ${item.nome}`) })
    var escolha = Number(prompt(`Informe o numero que deseja informações:
    ${menu.forEach(item => { `${item.id}- ${item.nome}` })}`));

    alert(menu[escolha].bio);
}
ofertaMenu();
var retornaMenu = confirm("Deseja retornar ao menu?");
while (retornaMenu == true) {
    ofertaMenu();
}
