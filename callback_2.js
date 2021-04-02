const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt');

console.log(__dirname);

const exibirConteudo = (err, conteudo) => console.log(conteudo.toString())

console.log('inicio...');

fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (_,conteudo) => console.log(conteudo.toString()))

console.log('Fim...')

console.log('inicio sync...')

const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString());

console.log('fimsync...')