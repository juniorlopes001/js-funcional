function exec(fn, a, b) {
    return fn(a,b)
}

const somarNoTerminal = (x, y) => console.log(x + y);
const subtrairNoTerminal = (w, z) => console.log(w - z);


exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 186, 38);


const cb = () => console.log('exec....');

setInterval(cb,5000)