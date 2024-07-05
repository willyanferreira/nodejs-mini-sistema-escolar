const entrada = require ("prompt-sync")();

const disciplinas = [];
const notas = [];

class Disciplina{
    constructor(disciplina){
        let id = disciplinas.length;
        disciplinas.push({'id': id + 1, 'disciplina': disciplina});
    }

    // cadastrarDisciplina(disciplina){
    //     disciplinas.push(disciplina);
    // }
}
class Aluno {
    constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
}
saudacao(aluno) {
    console.log(`Olá ${aluno.nome}, vc tem ${aluno.idade} anos`);
    // console.log(nome);
}
}

// const nome1 = entrada("Digite seu nome: ");
// const idade1 = entrada("Digite sua idade: ");
// const notas
// const entradaDeDaos = entrada("Digite algo: ");
// console.log(`Você digitou ${entradaDeDaos}`);
// const aluno1 = new aluno(nome1, idade1);
// aluno1.saudacao(aluno1);

for(let d = 0; d < 3; d++){
const matematica = entrada("Cadastre uma disciplina: ");
const disciplina1 = new Disciplina(matematica)
}
console.log(disciplinas);