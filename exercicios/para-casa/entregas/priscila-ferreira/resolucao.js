const bebidas = require('./mockBebidas');
const prompt = require('prompt-sync')();

function ofertaMenu() {
    console.clear();
    let menu = "Informe o numero que deseja informações:";
    bebidas.forEach(bebida => { menu += `${bebida.id}- ${bebida.nome} `});
    let escolha = Number(prompt(menu));
    console.log(bebidas[escolha - 1].getDescricao());
}

ofertaMenu();

let retornaMenu = confirm("Deseja retornar ao menu?");
while (retornaMenu === true) {
    ofertaMenu();
}