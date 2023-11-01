//Arrow Functions
let multi = array.map (value => value * 10);

let multin = array.map ((value, index)=>{
    // Mais de uma operação
    return value * 10
});

array.map(value => value > 10 ? 0 : 2);

let funcaoSoma = (param1, param2) => param1 + param2;

setTimeout(() => execucao,100);

setTimeout(() => {
    execucao
},100);