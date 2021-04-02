const carrinho = [
    {
        nome: 'Caneta', qtde: 10, preco: 7.99
    },
    {
        nome: 'Caderno', qtde: 0, preco: 30.00
    },
    {
        nome: 'Lapis', qtde: 4, preco: 11.00
    },
    {
        nome: 'abajur', qtde: 1, preco: 4.00
    },
    {
        nome: 'antena', qtde: 3, preco: 1.00
    }
]


const getTotal = item => item.qtde * item.preco

const somar = (acc, el) => acc + el

const totais = carrinho.map(getTotal)

const fragil = item => item.fragil

console.log(totais);

const totalGeral = carrinho.filter(fragil).map(getTotal).reduce(somar);


console.log(totalGeral);