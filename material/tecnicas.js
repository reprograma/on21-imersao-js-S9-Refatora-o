/* 
Refatoração : Extrair Método (ExtractMethod)

Quando você têm partes similares do código que podem ser agrupadas, geralmente código que está duplicado, então você deve mover essas partes para um novo método que tenha um nome que faça sentido


Refatoração : Mover Método (Move Method)

Quando você possui um método que será utilizado muitas vezes por outra classe diferente da classe na qual ele foi definido, crie um método similar nesta classe que o está utilizando, depois copie o corpo do método copiado para o novo método, então substitua as chamadas para utilizarem o método local. Pode-se também avaliar se o método original deve ser preservado ou se pode ser eliminado.


Refatoração : Mover Atributo (Move Field)

Similar à técnica Mover Método (seção 2.3.2), Mover Atributo é aplicada quando outra classe diferente da classe onde o atributo foi definido, o utiliza muitas vezes. Nesse caso devemos apenas copiar o atributo de uma classe para outra e alterar as chamadas para que passem a utilizar o atributo local. Mais uma vez cabe avaliar se o atributo original deve ou não ser eliminado.

Refatoração : Extrair Classe (Extract Class)

Quando você possui uma classe que está executando a tarefa de duas, então crie uma nova classe, depois mova todos os atributos relevantes para esta nova classe.

Refatoração : Encapsular Atributo (Encapsulate Field)

Quando um atributo é acessado diretamente e isto parecer ser estranho, devem-se criar métodos de acesso a este atributo.

Refatoração : Renomear Método (Rename Method)

Quando o nome de um método não revela qual a sua intenção, deve-se altera-lo imediatamente, de modo que o novo nome deve descrever claramente o que ele se propõe a fazer.



*/