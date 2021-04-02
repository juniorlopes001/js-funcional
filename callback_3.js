const nums = [1, 2, 3, 4, 5]

const dobro = (n, i, a) => n * 2 + i + a.length

console.log(nums.map(dobro));


nomes = ['Ana', 'Bia', 'Leticia']

const primeiraLetra = texto => texto[0];


const letras = (nomes.map(primeiraLetra));

 console.log(nomes, letras);

const carrinho = [
    {
        nome: 'Caneta', qtde: 11, preco: 7.99
    },
    {
        nome: 'Caderno', qtde: 12, preco: 30.00
    },
    {
        nome: 'Lapis', qtde: 13, preco: 11.00
    }
]
const getNome = item => item.nome

console.log(carrinho.map(getNome));

const menorTrinta = item => {
    if(item.preco < 30)
     return item.preco
}


const getOito = function( item ){
    if(item.preco > 8) {
        return item.preco
    }
}


console.log(carrinho.map(getOito) + ' maior que 8');

console.log(carrinho.map(menorTrinta) + ' maior que 30');



console.log(carrinho.map(function (value) {
    return getNome(value)
}));

const getTotal = item => item.qtde * item.preco
const totais = carrinho.map(getTotal)

console.log(totais);

Array.prototype.meuMap = function (fn) { 
    
    const novoArray = []
    
    for(let i = 0; i < this.length; i++) { 
       const resultado = fn(this[i], i, this)
        novoArray.push(resultado)
    }
    
   return novoArray
}

const getTotal = item => item.qtde * item.preco
const totais = carrinho.meuMap(getTotal)

console.log(totais);
