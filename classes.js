class Pessoa{
    constructor(nome,altura,genero){
        this .nome = nome;
        this._altura = altura;
        this.sexo = sexo;
    }

    getAltura(){
        return this._altura
    }

    get altura(){
        return this._altura
    }

    set altura(value){
        this._altura = value;
    }
}

const pessoa = new Pessoa('Elias', '1.69','m');

console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa.getAltura);
console.log(pessoa.altura);