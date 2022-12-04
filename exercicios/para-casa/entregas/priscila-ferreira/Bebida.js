class Bebida {
    #id;
    nome;
    preco;
    sabor;
    marca;

    constructor(nome, preco, sabor, marca) {
        this.#id = Bebida.getProximoId();

        if (nome === undefined || preco === undefined || marca === undefined) {
            throw new Error('É necessário inserir as informações obrigatórias (nome, tipo, preço e marca).');
        }
        if (typeof nome === "string") {
            this.nome = nome;
        }
        if (typeof preco === "number" && preco > 0) {
            this.preco = preco;
        }
        if (typeof marca === "string") {
            this.marca = marca;
        }
        if (typeof sabor === "string") {
            this.sabor = sabor;
        }
    }

    static ultimoId = 0;

    static getProximoId() {
        return ++Bebida.ultimoId;
    }

    getDescricao() {
        return `Nome: ${this.nome}\nPreço: R$${this.preco}\nSabor: ${this.sabor}\nMarca: ${this.marca}\n`;
    }

    get id() {
        return this.#id;
    }
}

module.exports = Bebida;