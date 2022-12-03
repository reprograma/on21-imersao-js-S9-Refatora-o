const Bebida = require('./Bebida');

let bebidas = [];
bebidas.push(new Bebida("Refrigerante", 3.50, "Morango", "RefriKeylinha"));
bebidas.push(new Bebida("Suco", 2.50, "Uva", "SuquinhoKeylinha"));
bebidas.push(new Bebida("Chá", 3.00, "Mate", "MateKeylinha"));

module.exports = bebidas;