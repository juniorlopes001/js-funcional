const primeiroElemento = (any) => any[0];

const primeiraLetra = string => string[0]

const letraMinuscula = (letra) => letra.toLowerCase();

new Promise(function (cumprirPromessa) {
  cumprirPromessa(["Ana", "Bia", "Carlos", "Danilo"]);
})
  .then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then((letraMinuscula) => console.log(letraMinuscula));
