//Exercicio para a Sala - Refatore o código abaixo:
var menu = [{
    id: 1,
    name: "Soda",
    price: 3.50,
    flavor: "strawberry",
    brand: "RefriKeylinha"
},
{
    id: 2,
    name: "Juice",
    price: 2.50,
    flavor: "Grape",
    brand: "SuquinhoKeylinha"
},
{
    id: 3,
    name: "Tea",
    price: 3.00,
    flavor: "Mate",
    brand: "MateKeylinha"
}];

function offerMenu() {
    var choose = Number(prompt(`Enter the number you want information on:
    1- ${menu[0].name}
    2- ${menu[1].name}
    3- ${menu[2].name}`)
);

    switch (choose) {
        case 1: alert(` Name: ${menu[0].name}\n Price: R$${(menu[0].price).toFixed(2)}\n Flavor: ${menu[0].flavor}\n brand: ${menu[0].brand}`);
            break;
        case 2: alert(` Name: ${menu[1].name}\n Price: R$${(menu[1].price).toFixed(2)}\n Flavor: ${menu[1].flavor}\n brand: ${menu[1].brand}`);
            break;
        case 3: alert(` Name: ${menu[2].name}\n Price: R$${(menu[2].price).toFixed(2)}\n Flavor: ${menu[2].flavor}\n brand: ${menu[2].brand}`);
            break;
    }

}
offerMenu();
var returnMenu = confirm("Do you want to return to the menu?");
    while(returnMenu == true){
        offerMenu();
}
