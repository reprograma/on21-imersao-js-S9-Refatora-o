//Exercicio para a Sala - Refatore o código abaixo:
var menu = [{
    id: 1,
    name: "Refrigerante",
    price: 3.50,
    flavor: "Morango",
    brand: "RefriKeylinha"
},
{
    id: 2,
    name: "Suco",
    price: 2.50,
    flavor: "Uva",
    brand: "SuquinhoKeylinha"
},
{
    id: 3,
    name: "Chá",
    price: 3.00,
    flavor: "Mate",
    brand: "MateKeylinha"
}];

function offerMenu() {
    var choose = Number(prompt(`Informe o numero que deseja informações:
    1- ${menu[0].name}
    2- ${menu[1].name}
    3- ${menu[2].name}`)
);

    switch (choose) {
        case 1: alert(` Nome: ${menu[0].name}\n Preço: R$${(menu[0].price).toFixed(2)}\n flavor: ${menu[0].flavor}\n brand: ${menu[0].brand}`);
            break;
        case 2: alert(` Nome: ${menu[1].name}\n Preço: R$${(menu[1].price).toFixed(2)}\n flavor: ${menu[1].flavor}\n brand: ${menu[1].brand}`);
            break;
        case 3: alert(` Nome: ${menu[2].name}\n Preço: R$${(menu[2].price).toFixed(2)}\n flavor: ${menu[2].flavor}\n brand: ${menu[2].brand}`);
            break;
    }

}
offerMenu();
var returnMenu = confirm("Deseja retornar ao menu?");
    while(returnMenu == true){
        offerMenu();
}
