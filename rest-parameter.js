// function funcao (param1,param2){
//     var args = Array.prototype.slice.call(arguments, funcao.length);
//     console.log(args);
// }


function funcao (param1,param2,...oterParams){
    var args = Array.prototype.slice.call(arguments, funcao.length);
    console.log(args);
}

funcao(1,2,3,4,5,6);

let Array1 = [1,2,3,4];

let Array2 = [5,6,7,8, ...Array1];

let string = "luiz carlos";

let stringArray = [...string];

console.log(stringArray);