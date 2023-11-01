function test(param1, param2 = 'padrao'){
    if(param2 === 'padrao'){

    }
}

test('valor');

function test(param1, param2 = 'padrao', param3 = 'outrovalor'){
    if(param2 === 'padrao'){

    }
}

test('valor',1);

function test(param1, param2 = 'padrao', param3 = 'outrovalor'){
    if(param2 === 'padrao'){

    }
}

test();

function funcao(param1, isAlgumaCoisa = true){

}

funcao(23)