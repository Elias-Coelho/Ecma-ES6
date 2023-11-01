let first_name = 'Elias';
    last_name = 'Coelho';

let obj = {
    first_name,
    last_name,
    method(param1,param2) {
        
    },
    function funcao({first_name, last_name}){
        console.log(first_name,last_name);
    }
}

funcao(obj)