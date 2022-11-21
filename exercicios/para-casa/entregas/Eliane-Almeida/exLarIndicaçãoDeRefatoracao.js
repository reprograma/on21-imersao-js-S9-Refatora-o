// Alterar nome do menu para menuDeBebidas
const prompt = require("prompt-sync")();

// Alterar nome das variaveis, atributos e funções para o inglês,
// alterar o nome do menu para menuDrinks
// Ajustar a identação de todo o lar

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
];
// Adicionr linha em branco
//Alterar nome da função para o englis e informar de onde é o menu em português 
// ficaria OfertaDoMenuDeBebida
function ofertaMenu() {
     var escolha = Number(
        prompt(`Informe o numero que deseja informações:
          1- Refrigerante
          2- Suco
          3- Chá`)
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
        //Acrescentar mais um caso para sair
    }
}
//Adicionar nova linha em branco
ofertaMenu();
//Adicionar nova linha em branco
var retornaMenu = confirm("Deseja retornar ao menu?");
//Adicionar nova linha em branco
while (retornaMenu == true) {
    ofertaMenu();
}
