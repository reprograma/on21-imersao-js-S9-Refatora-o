//Exercicio para a Sala - Refatore o código abaixo:
const drinkMenu = [{
    id: 1,
    name: "Refrigerante",
    price: 3.50,
    taste: "Morango",
    brand: "RefriKeylinha",
    bio: `Nome: ${this.name}
    Preço: ${this.price}
    Sabor: ${this.taste}
    Marca: ${this.brand}`
},
{
    id: 2,
    name: "Suco",
    price: 2.50,
    taste: "Uva",
    brand: "SuquinhoKeylinha",
    bio: `Nome: ${this.name}
    Preço: ${this.price}
    Sabor: ${this.taste}
    Marca: ${this.brand}`
},
{
    id: 3,
    name: "Chá",
    price: 3.00,
    taste: "Mate",
    brand: "MateKeylinha",
    bio: `Nome: ${this.name}
    Preço: ${this.price}
    Sabor: ${this.taste}
    Marca: ${this.brand}`
}];

function openMenu() {
    let choice = Number(prompt("Informe o numero que deseja informações:\n 1- Refrigerante\n 2- Suco\n 3- Chá" ));

    switch (choice) {
        case 1: alert(menu[0].bio);
            break;
        case 2: alert(menu[1].bio);
            break;
        case 3: alert(menu[2].bio);
            break;

    }
}
openMenu();
let backToMenu = confirm("Deseja retornar ao menu?");
    while(backToMenu == true){
        openMenu();
    }
