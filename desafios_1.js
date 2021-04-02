//somar(3)(4)(5)

//calcular (3)(7)

function somar(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}


const calc = somar(3)(4)(10)

console.log(calc);


function calcular(x){
    return function (y) {
        return function(fn){
            return fn(x, y)
        }
    }
}

function subtrair(a,b) {
    return a - b
}

function multiplicar(a,b) {
    return a * b
}

const r1 = calcular(10)(5)(subtrair)

const r2 = calcular(10)(5)(multiplicar)

console.log(r1);

console.log(r2);


