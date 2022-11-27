//const prompt = require("prompt-sync")();

function machine() {
  "===========Drink  Machine===============\n";
  "Digite uma opção de bebida:  \n";

  let options = prompt([
    { id: 1, Type: "Café Extra forte", Value: 10.0, Marca: "Tabajara" },
    { id: 2, Type: "Refrigerante Sprite", Value: 5.0, Marca: "Pepsico" },
    { id: 2, Type: "Suco de laranja", Value: 7.0, Marca: "De casa" },
    { id: 3, Type: "Suco de laranja", Value: 7.0, Marca: "De casa" },
    { id: 4, Type: "Água", Value: 3.0, Marca: "Indaiá" },
    { id: 5, Type: "Cerveja", Value: 12.0, Marca: "Cacildis" },
    {
      id: 0,
    },
  ]);

  while (options != "0") {
    switch (options) {
      case "1":
        console.log("Você escolheu café, Aproveite!");
        break;
      case "2":
        console.log("Você escolheu refrigerante, Aproveite!");
        break;
      case "3":
        console.log("Você escolheu suco de laranja, Aproveite!");
        break;
      case "4":
        console.log("Você escolheu água, Aproveite!");
        break;
      case "5":
        console.log("Você escolheu cerveja, Aproveite!");
        break;
      default:
        console.log("Opção inválida");
        break;
    }
    options = prompt(
      "==============Drink  Machine============ \n Digite uma opção de bebida: \n ================================================ \n 1- Café: R$ 10.00 - Tabajara - Extra forte \n ==  \n 2- Refrigerante: R$ 5.00 - Sprite - Soda Limonada \n == \n 3- Suco: R$ R$ 7.00 - Caseiro - Laranja \n == \n 4- Água: R$ 3.00 - com gás - Indaiá - \n == \n 5: Cerveja R$ 12.00 - R$ - Larger - Cacildis \n ==  0- Sair \n"
    );
    if (options == "0") {
      console.log("Obrigada! Aproveite sua bebida");
    }
  }
}

machine();
