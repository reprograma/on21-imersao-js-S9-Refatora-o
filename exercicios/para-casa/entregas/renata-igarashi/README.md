# Exercício para casa - Semana 09 - Refatoração

#### Mudança de nomes de variáveis e funções:

As mensagens, variáveis, funções e propriedades foram alterados para o inglês:

- Propriedades do objeto bebidas alterado para:

```sh
{
  id:
  name:
  price:
  flavor:
  brand:
}
```

- Função ofertaMenu() alterado para menuDrinkMachine()
- Variáveis:
  - **De**: escolha **Para**: drinkChoice
  - **De**: filtroPedido **Para**: drinkChoice
  - **De**: retornaMenu **Para**: backToMenu
  - **De**: menu **Para**: drinkList

#### Mudança na seleção de bebida:

- Ao invés de switch case, a busca pelas bebidas serão feitas pelo método find:

```sh
  let selectDrink = drinksList.find(drink => drink.id === drinkChoice)
  if(selectDrink){
    console.log(selectDrink)
  }
```

- Para o funcionamento do código no node, o while foi alterado para receber um valor do prompt para retornar ao menu:

```sh
let backToMenu = prompt(`Back to menu? Press y to yes `);
while (backToMenu == "y") {
 menuDrinkMachine();
```

#### Organização de arquivos:

- Para uma melhor organização, os arquivos foram separados da seguinte forma:
  - drinksList - contendo a array com a lista de bebidas
  - drinkMachineRefactor - contendo a função de listagem de opções e seleção de bebida
