let menuDrinks = [
    {
        id: 1,
        name: "Soda",
        price: 3.5,
        flavor: "Morango",
        brand: "Dolly",
    },
    {
        id: 2,
        name: "Juice",
        price: 2.5,
        flavor: "Uva",
        brand: "Kisuco",
    },
    {
        id: 3,
        name: "Tea",
        price: 3.0,
        flavor: "Mate",
        brand: "Mateleao",
    },
];

function ofertaMenu() {
    let escolhaDoCliente = Number(
        prompt(`Informe o numero que deseja informações:
      1- Soda
      2- Juice
      3- Tea`)
    );

    const [order] = menuDrinks.filter(
        (element) => element.id === escolhaDoCliente
    );
    const key = ["name", "price", "flavor", "brand"];

    if (escolhaDoCliente)
        key.forEach((info) => console.log(order[info]));
}
ofertaMenu();
let returnMenu = confirm("Deseja retornar ao menu?");
while (returnMenu == true) {
    ofertaMenu();
}