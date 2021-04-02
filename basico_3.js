const saudacao = (nome) => {
  return "Fala " + nome + "!!!";
};

console.log(saudacao('Almir'));

const saudacao = nome => `Fala ${2*2} eai, blz`

console.log(saudacao('jr'));

const somar = (...numeros) => {
  console.log(Array.isArray(numeros));
  let total = 0;
  for(let n of numeros) {
    total = total + n
  }
  return total
}

console.log(somar(1,2,3))

const potencia = (base) => (exp) => Math.pow(base, exp);

console.log(potencia(2)(10));


This
Array.prototype.ultimo = function () {
  console.log(this[this.length - 1]);
}

Array.prototype.primeiro = function () {
  console.log(this[0]);
}





const numeros = [1,2,500]

numeros.ultimo()
numeros.primeiro()

var arr = []

var pessoa = {}

console.log(typeof (pessoa))