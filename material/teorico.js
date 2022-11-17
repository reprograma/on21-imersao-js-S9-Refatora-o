/* Refatoração é o processo de alterar o código fonte de uma maneira que não altere seu comportamento externo e ainda melhore a sua estrutura interna. É uma técnica disciplinada de limpar e organizar o código, e por consequência minimizar a chance de introduzir novos bugs. – 

Ela é utilizada para manter um software bem projetado mesmo com o decorrer do tempo e as mudanças que ele virá a sofrer. 

O código sofre grandes alterações ao longo do tempo, alterações capazes de mudar toda a sua estrutura inicial. Com várias equipes de desenvolvimento trabalhando, as vezes podem gerar certos code smells, pequenas bagunças que precisam ser ajustadas.

O processo de refatoração é uma otimização. Precisamos sempre pensar em código para melhorar a sua conformidade com padrões e a legibilidade.

OBS: A refatoração visa apenas à melhoria interna do código fonte.

Por que refatorar?
Refatorar o software é uma técnica que pode, e deve, ser utilizada por diversas razões. Vejamos algumas delas:

Melhora o projeto: sem refatoração a estrutura interna de um software geralmente se degrada com as mudanças que ocorrem no decorrer do tempo. Programadores que nunca viram o código antes são encarregados de adicionar uma nova funcionalidade e provavelmente vão fugir um pouco do padrão que foi utilizado quando o software foi projetado. Aplicar refatoração após a adição dessa nova funcionalidade poderá deixá-la em conformidade com os padrões que foram utilizados nas outras funcionalidades que o software já possui;
Torna o software fácil de entender: desenvolvedores geralmente estão sempre com pouco tempo para terminar suas tarefas e entregar a funcionalidade pronta. Para conseguir entregar dentro do prazo, alguns acabam se apressando na hora de codificar, o que pode prejudicar a legibilidade (clareza do código) e alguns bugs podem passar despercebidos. Erros comuns são: não nomear as variáveis corretamente, não comentar, duplicar código, colocar métodos em classes inadequadas, entre outros. Ao empregar a refatoração, muito provavelmente, tais "sujeiras" serão removidas do código, o que o tornará muito mais fácil de compreender e manter;
Ajuda a achar bugs: quando um desenvolvedor vai refatorar certo código, ele deve entender exatamente o que aquele código está fazendo. Entendendo muito bem o seu funcionamento, os possíveis bugs existentes naquele código acabam se tornando evidentes. Como o desenvolvedor já está alterando o código, recomenda-se também eliminar o bug;
Ajuda a programar mais rápido: com todas as vantagens citadas até agora, pode-se notar que quando a refatoração é aplicada por uma pessoa que tem domínio sobre a técnica, a qualidade do software aumenta e o código fica mais fácil de entender. Assim, quando um desenvolvedor pega o código para adicionar uma nova funcionalidade e consegue compreendê-lo mais rapidamente, o processo de desenvolvimento também ocorre de maneira mais rápida e tranquila.

Processo de Refatoração:

Entender o código de outra pessoa não é uma tarefa trivial. Ainda mais quando é um software muito grande e complexo. Quando uma pessoa modifica um código que não é de sua autoria é possível que ela cometa alguns deslizes (métodos e variáveis mal nomeadas, duplicação de código, etc.) e com isso o código vai se tornando mais difícil de compreender.

Deste modo, após algum tempo, a inserção de novas funcionalidades se tornará uma tarefa mais complicada do que deveria, pois o desenvolvedor não conseguirá, ou terá muitas dificuldades em, entender exatamente o que código está fazendo.

Para evitar que o código fique complexo com o passar do tempo devido às atividades de manutenção e adição de novas funcionalidades, devemos refatorá-lo conforme as atualizações forem implementadas.

Como refatorar?

O Ideal é tentar sempre tornar o código menos complexo possível, e ajustar o entendimento dele com o ambiente externo.

Pense sempre na entrada, processamento e saída para que você possa montar uma estrutura funcional e conseguir fazer as devidas alterações. 

Alterações ou ajustes? Refatoração se implica em otimizar e melhorar um código fonte existente funcional, ou seja, um código que funcione corretamente. 

Por que não refatoramos códigos incorretos? Com por exemplo Abusos de OO?
Se um código se demonstra incompleto, por mais que funcione grande parte, o que devemos fazer?
Ao decorrer da refatoração você se depara com um processo muito complexo que não poderia otimizar, qual a melhorar maneira de prosseguir?
Como diferenciamos refatoração em linguagens back-end e front-end?
Podemos dividir a tarefa de refatorar um código?


PARA O LAR -

Vamos refatorar em sala o projeto do módulo 7. Salve o antigo projeto e identifique as mudanças feitas durante o processo de refatoração.


*/


/* 1- Por que não refatoramos códigos incorretos? Com por exemplo Abusos de OO?
Pois o que não esta funcionando, não se refatora e sim corrigir.
Pois temos que garantir que o código esteja funcionando para refatorar.


2- Se um código se demonstra incompleto, por mais que funcione grande parte, o que devemos fazer?
é necessário fazer a correção antes.
Entender as entradas, processamentos e saídas para assim podermos refatorar.

3- Ao decorrer da refatoração você se depara com um processo muito complexo que não poderia otimizar, qual a melhorar maneira de prosseguir?
identificar o que eu conheço, listar o que não conheço e pesquisar na doc.
Pedir ajuda.
Manter do jeito que está.

4- Como diferenciamos refatoração em linguagens back-end e front-end?
front - aplicação de semantica


5- Podemos dividir a tarefa de refatorar um código?
sim!

*/