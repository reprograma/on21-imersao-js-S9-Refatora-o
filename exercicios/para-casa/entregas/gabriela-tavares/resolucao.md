
# Exercício de Casa 🏠 

## Resolução

**Refatoração do código:**

- Alteração das variavíes **'var'** por **'let'**.
- Alteração de todas as palavras para o inglês.
- Alteração do nome das variáveis e funções.
- Identação.

## Código com a refatoração:

```
let fixedListDrinks = [
  {
    id: 1,
    name: "Soda",
    price: 3.5,
    flavor: "strawberry",
    brand: "RefriKeylinha",
  },
  {
    id: 2,
    name: "Juice",
    price: 2.5,
    flavor: "Grape",
    brand: "SuquinhoKeylinha",
  },
  {
    id: 3,
    name: "Tea",
    price: 3.0,
    flavor: "HerbTea",
    brand: "MateKeylinha",
  },
];


function menu() {
  let choice = Number(
    prompt(`Enter the number you want information on:
        1- Soda
        2- Juice
        3- Tea`)
  );

  const [requestFilter] = fixedListDrinks.filter(
    element => element.id === choice
  );
  const key = ["name", "price", "flavor","brand"];

  if (choice) key.forEach((info) => console.log(requestFilter[info]));
}

menu();

  let backTomenu = confirm("Do you want to go back to the menu?");
  while (backTomenu == true) {
   menu();
  }
  ```

  ## Código original sem a refatoração:

  ```
  var menu = [{
    id: 1,
    nome: "Refrigerante",
    preco: 3.50,
    sabor: "Morango",
    marca: "refriKeylinha",
},
{
    id: 2,
    nome: "Suco",
    preco: 2.50,
    sabor: "Uva",
    marca: "suquinhoKeylinha",   
},
{
    id: 3,
    nome: "Chá",
    preco: 3.00,
    sabor: "Mate",
    marca: "mateKeylinha",
    
}];


function ofertaMenu() {
    var escolha = Number(prompt(`Informe o numero que deseja informações:
    1- Refrigerante
    2- Suco
    3- Chá`));

const [filtroPedido] = menu.filter(element => element.id===escolha);
const chave = ["nome", "preco", "sabor","marca"];
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

    if(escolha)
         chave.forEach(info => console.log(filtroPedido[info]));
    
}
ofertaMenu();
var retornaMenu = confirm("Deseja retornar ao menu?");
    while(retornaMenu == true){
        ofertaMenu();
}

```

