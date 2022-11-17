const menuFixoBebidas = [{
    id: 1,
    nome: "Refrigerante",
    preco: 3.50,
    sabor: "Morango",
    marca: "RefriKeylinha",
},
{
    id: 2,
    nome: "Suco",
    preco: 2.50,
    sabor: "Uva",
    marca: "SuquinhoKeylinha",   
},
{
    id: 3,
    nome: "Chá",
    preco: 3.00,
    sabor: "Mate",
    marca: "MateKeylinha",
    
}];

function infoDaBebida(index){
    return `
    Nome: ${menuFixoBebidas[index].nome}
    Preço: ${menuFixoBebidas[index].preco}
    Sabor: ${menuFixoBebidas[index].sabor}
    Marca: ${menuFixoBebidas[index].marca}`
}

function ofertarMenu() {
    const escolha = Number(prompt(`Informe o numero que deseja informações:
    1- Refrigerante
    2- Suco
    3- Chá`));

    switch (escolha) {
        case 1: alert(infoDaBebida(0));
        break;
        case 2: alert(infoDaBebida(1));
        break;
        case 3: alert(infoDaBebida(2));
        break;
    }
}
ofertarMenu();

const retornarMenu = confirm("Deseja retornar ao menu?");

retornarMenu === true ? ofertaMenu() : alert("obrigado até mais!"); 