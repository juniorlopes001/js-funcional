const carrinho = [
    {
        nome: 'Caneta', qtde: 11, preco: 7.99
    },
    {
        nome: 'Caderno', qtde: 12, preco: 30.00
    },
    {
        nome: 'Lapis', qtde: 13, preco: 11.00
    },
    {
        nome: 'abajur', qtde: 13, preco: 4.00
    },
    {
        nome: 'antena', qtde: 13, preco: 1.00
    }
]

// const qtdeMaiorQueZero = item => item.preco < 4.99

// const getNome = item => item.nome

// const total = carrinho.filter(qtdeMaiorQueZero).map(getNome)

// console.log(total);

// Array.prototype.meuMap = function (fn) { 
    
//     const novoArray = []
    
//     for(let i = 0; i < this.length; i++) { 
//        const resultado = fn(this[i], i, this)
//         novoArray.push(resultado)
//     }
    
//    return novoArray
// }

Array.prototype.meuFilter = function(fn){
    
    let novoArray = []

    for(let i = 0; i < this.length; i++) {
            if(fn(this[i], i, this)) { 
                novoArray.push(this[i])
            }
    }
    return novoArray
}

const qtdeMaiorQueZero = item => item.preco < 4.99

const getNome = item => item.nome

const total = carrinho.meuFilter(qtdeMaiorQueZero).map(getNome)

console.log(total);