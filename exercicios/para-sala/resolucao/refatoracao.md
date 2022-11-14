**Alterações feitas na refatoração**

Alteração "var menu" => "const listaDeBebidas";

Criação da função buscarBebida(number), que recebe um id como parâmetro e retorna a bebida com este id da listaDeBebidas;

Remoção da propriedade "bio" dos objetos da listaDeBebidas => criação da função formataBioBebida(number), que recebe como parâmetro o id da bebida escolhida pelo usuário, e chama a função buscarBebida(number) passando este id. Por fim retorna uma string contendo os dados que formam a bio da bebida escolhida;

Criação de uma iteração da listaDeBebidas dentro da função ofertaMenu(), que concatena o id e nome de cada bebida da lista na variável menuBebidas;

Apresentação da variável menuBebidas no texto do prompt;

Alteração "var escolha" => "let escolhaDoUsuario";

Remoção do switch para retornar a bio da bebida escolhida => chamada da função formataBioBebida(number) dentro de um alert(), passando o numero escohido pelo usuário;

Alteração "var retornaMenu" => "let retornaMenu";

Remoção do while para verificar o valor da variavel retornaMenu => criação de um if para fazer essa verificação;

Criação da função retornaAoMenu(), contendo as linhas que declaram e verificam a variável retornaMenu e chamam a função ofertaMenu()
