// setTimeout(function () {
//   console.log("Executando callback");
//   setTimeout(function () {
//     console.log("executando calback...2");
//     setTimeout(function () {
//       console.log("executando calback...3");
//     }, 2000);
//   }, 2000);
// }, 2000);


function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function() {
            console.log('Executando promise...');
            resolve()
        }, tempo)
    })
}

function esperarPor2(tempo = 3000) {
    return new Promise(function (resolve) {
        setTimeout(function() {
            console.log('cheguei depois');
            resolve()
        }, tempo)
    })
}



 esperarPor()
 .then(() => esperarPor())
 .then(esperarPor2);