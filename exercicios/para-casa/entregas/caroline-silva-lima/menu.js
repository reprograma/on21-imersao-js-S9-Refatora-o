const machineItems = require('./machineItems');
const readline = require('readline-sync');

function newOffer () {
    readline.question(`Want some more drink? yes/no`);
};

function drinkChoice () {
    readline.question ('❤️ Enter the name of the drink you want ❤️');
};

function final(){
    return `Thanks`
};

function itensMenu (){
    const menu =  machineItems.map(machineItems=> (`${machineItems.name} , price ${machineItems.price}`));
    console.table(menu);
    console.log('These are the drinks available')
};

function option(){
    const option = readline.question('How about a drink? yes / no ');
    if (option === 'yes'){
        // criar laço de repetição com break
        drinkChoice();
        newOffer();
        drinkChoice();
        ;
    }
    else if (drinkChoice === no){
        const newOption = readline.question ("Are you sure you don't want anything? yes/no");
    }
    else{
        final()
    };
};


    /*if (newOffer === 'yes'){
        `${itensMenu()}`
        const drinkChoice = readline.question ('❤️ Enter the name of the drink you want ❤️');
        //console.log(drinkChoice);
        console.log(`Remove your drink`)
    }
    else{
        console.log('I understand. When you want to drink something come back here!');
    };*/


function enter(){
    itensMenu();
    option();
        /*switch (option){
            case machineItems.map:
                (requestion())
            default:
                console.log('I understand. When you want to drink something come back here!')
        };
   (requestion());*/
   (final())
};

console.log(enter())


/*console.log(entrance); 
    if (entrance === 'yes'){
        console.log(drinkChoice);
        console.log(answer);
    }
    else{
        console.table(`These are the drinks available: ${ menu }}`);
        console.log(answer)
    };
    return `Retire sua bebida`;

/*const entrance = readline.question('How about a drink? yes / no ');
    if (entrance === 'yes'){
    console.table(menu); 
    const drinkChoice = readline.question ('❤️ Enter the name of the drink you want ❤️');
    const answer = machineItems.find(machineItems => machineItems.name === drinkChoice);
    console.log(answer);
    }
    else{
    console.table(`These are the drinks available: ${ menu }}`);
    const answer = machineItems.find(machineItems => machineItems.name === drinkChoice);
    console.log(answer)
    };

const answer = machineItems.find(machineItems => machineItems.name === drinkChoice);
console.log(answer)

/*const drinkChoice = readline.question ('❤️ Enter the name of the drink you want ❤️');
Conforme rodei a aplicação percebi a desnecessidade dessa const repetir nessa linha. Retirei.
Também movimentei a consta da linha 6 para a linha 8*/

/*module.exports = drinkChoice;
Retirei o module.exports, já que esse modulo não estava sendo exportado para nenhum local*/
// Indentei o código corretamente
// Organizei o código criando funções e coloquei as consts que são reaproveitadas no início do código.