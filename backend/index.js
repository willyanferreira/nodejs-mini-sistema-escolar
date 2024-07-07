const entrada = require ("prompt-sync")();

// const disciplinas = [];

// class Disciplina{
//     constructor(disciplina){
//         let id = disciplinas.length;
//         disciplinas.push({'id': id + 1, 'disciplina': disciplina});
//     }
// }
// for(let d = 0; d < 5; d++){
//     const disciplina = entrada("Digite uma disciplina: ");
//     new Disciplina(disciplina);
// }
// console.log(disciplinas);
// class Aluno {
//     constructor(nome, idade){
//     this.nome = nome;
//     this.idade = idade;
//     this.disciplinas = [{
//         id: null,
//         nome: null,
//         nota: []
//     }];
// }

// saudacao(aluno) {
//     console.log(`Olá ${aluno.nome}, vc tem ${aluno.idade} anos`);
// }

// cadastrarDisciplinas(disciplina){
//     this.disciplinas.push(disciplina);
// }

// cadastrarNotas(nota){
//     console.log("Escolha uma matéria");
//     for(let m = 0; m < this.disciplinas.length; m++){
//         if(this.disciplinas.length == 0){
//             console.log("Nenhuma disciplina cadastrada.");
//             return;
//         }
//         console.log(this.disciplinas);
//     }
//     this.disciplinas.nota = nota;
// }
// }

let sair = false;

while(!sair){
    
    console.log("1. Cadastra Aluno");
    console.log("2. Cadastra Disciplina");
    console.log("3. Cadastra Nota");
    console.log("4. Sair");
    let menu = parseInt(entrada("Escolha uma opção: "));
    switch(menu){
        case 1:
            console.log("Cadastre um aluno");
        break;
        case 2:
            console.log("Cadastre uma disciplina");
        break;
        case 3:
            console.log("Cadastre uma nota");
        break;
        case 4:
            sair = true;
            console.log("Encerrando sistema");
        break;
        default:
            console.log("Número inválido");
    }
}