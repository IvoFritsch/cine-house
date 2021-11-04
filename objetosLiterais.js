

function Carro(potencia, cor, opcionais) {
  this.nome = "Gol 1000cc"
  this.ano = 2003
  this.potencia = potencia
  this.cor = cor
  this.opcionais = opcionais
  console.log('Foi criado o carro '+ this.nome)
}

const carroDois = new Carro(75, 'azul')
const carrotres = new Carro(75, 'azul')
const carrQuatro = new Carro(75, 'azul')
const carroCinco = new Carro(75, 'azul')
