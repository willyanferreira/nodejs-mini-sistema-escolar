const entrada = require("prompt-sync")();

const alunos = [];
const disciplinas = [];

class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.disciplinas = [{
            id: null,
            nome: null,
            nota: []
        }];
    }

    cadastroDisciplinasAluno(aluno){
        console.log(alunos[aluno].nome);
    }

}

class Disciplina{
    constructor(disciplina){
        this.disciplina = disciplina;
        let id = disciplinas.length;
        disciplinas.push({'id': id + 1, 'disciplina': disciplina});
    }
}

function cadastrarAlunos(nome, idade) {
    alunos.push(new Aluno(nome, idade));
}
function exibirAlunos() {
    for(let a = 0; a < alunos.length; a++){
        console.log(alunos[a].nome);
    };
}
function cadastrarDisciplinas(disciplina) {
    alunos.push(new Disciplina(disciplina));
}
function exibirDisciplinas() {
    for(let d = 0; d < disciplinas.length; d++){
        console.log(disciplinas[d].disciplina);
    };
}

let sair = false;

while (!sair) {

    console.log("1. Gerenciar Alunos");
    console.log("2. Gerenciar Disciplinas");
    console.log("3. Sair");
    let menu = parseInt(entrada("Escolha uma opção: "));
    switch (menu) {
        case 1:
            while(!sair){
                console.log("1. Cadastrar Aluno");
                console.log("2. Exibir Alunos");
                console.log("3. Cadastrar Disciplina para Aluno");
                console.log("4. Sair");
                let submenu = parseInt(entrada("Escolha uma opçõa: "));
                switch(submenu){
                    case 1:
                        console.log("***Cadastro de aluno***");
                        let nome = entrada("Digite o nome do aluno: ");
                        let idade = entrada("Digite a idade do aluno: ");
                        cadastrarAlunos(nome, idade);
                    break;
                    case 2:
                        console.log("***Exibindo alunos***");
                        exibirAlunos();
                    break;
                    case 3:
                        console.log("***Exibindo alunos cadastrados***");
                        let alunoID = 1;
                        for(let a = 0; a < alunos.length; a++){
                            console.log(`${alunoID} - ${alunos[a].nome}`);
                            alunoID++;
                        }
                        let alunoEscolhido = entrada("Digite o número do aluno selecionado: ");
                    break;
                    case 4:
                        console.log("Encerrando sistema.");
                        sair = true;
                    break;
                    default:
                        console.log("Opção inválida.");
                }
            }
            break;
        case 2:
            while(!sair){
                console.log("1. Cadastrar Disciplina");
                console.log("2. Exibir Disciplinas");
                console.log("3. Sair");
                let submenu = parseInt(entrada("Escolha uma opçõa: "));
                switch(submenu){
                    case 1:
                        console.log("***Cadastro de disciplina***");
                        let disciplina = entrada("Digite o nome da disciplina: ");
                        cadastrarDisciplinas(disciplina);
                    break;
                    case 2:
                        console.log("***Exibindo disciplinas***");
                        exibirDisciplinas();
                    break;
                    case 3:
                        console.log("Encerrando sistema.");
                        sair = true;
                    break;
                    default:
                        console.log("Opção inválida.");
                }
            }
            break;
        case 3:
            sair = true;
            console.log("Encerrando sistema.");
            break;
        default:
            console.log("Opção inválida");
    }
}