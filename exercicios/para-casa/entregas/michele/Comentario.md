Mudanças no código com a refatoração


1 - O array menu foi transformado em class para ter opçao de se quiser criar outros objetos em projetos futuros.

2 - O nome menu virou class e por convenção boas práticas, recebeu letra maiuscula no inicio;

3 - A chave bio que era do array menu, foi transformado em um array static da class Menu, tornando o processo de receber as variáveis mais dinâmico.

4 - As chaves do array dentro da bio, não recebe mais o id porque o objeto será pego pela posição do array, tornando o proceso mais simples e rápido. Irá criar o id da posição automaticamente pela posição do array bio.

5 - foi criada uma função imprimir que usa o (for) trazendo todos os elementos do array de forma automatica sem precisar digitar os itens no menu como tava anteriomente.

6 - A função ofertaMenu agora  recebe a função imprimir pra apresentar o menu das bebidas.

7 - No switch case dentro do alert, o modo como é chamado a bebida específica no array mudou, agora recebe o número da posição da bebida indicado no menu menos 1 que vai indicar a sua possição dentro do array chamado, deixando o processo de busca mais dinâmico. Eu ainda deixaria esse processo menos dependente, fazendo uma função e dentro de um case poderia chamar qualquer bebida que estivesse disponivel no array como fiz na minha atividade de casa. Assim não precisaria ta especificando qual número a bebiba tal vai ta la sendo esperada em algum case. Mais ai eu teria que mudar o leault do menu dando essa opção, seria poucas mudanças e não alterava a funcionalidade desejado para atividade proposta, mais mesmo assim mudaria a frase do menu. Como na refatoração não pode alterar nada da saída  do código, tem que deixar o código funcionando da mesma forma que estava, não fiz.
