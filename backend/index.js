const entrada = require("prompt-sync")();
const alunos = [];
const disciplinas = [];

class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.disciplinas = [];
    }

    cadastroDisciplinasAluno(alunoID) {
        console.clear();
        console.log("***Exibindo disciplinas cadastradas***");
        let disciplinaID = 1;
        for (let d = 0; d < disciplinas.length; d++) {
            console.log(`${disciplinaID} - ${disciplinas[d].disciplina}`);
            disciplinaID++;
        }
        let disciplinaSelecionada = parseInt(entrada("Digite o número da disciplina selecionada: ")) - 1;
        alunos[alunoID].disciplinas.push(disciplinas[disciplinaSelecionada]);
    }
}

class Disciplina {
    constructor(disciplina) {
        this.disciplina = disciplina;
        let id = disciplinas.length;
        disciplinas.push({ 'id': id + 1, 'disciplina': disciplina });
    }
}

function cadastrarAlunos(nome, idade) {
    alunos.push(new Aluno(nome, idade));
    console.log("Aluno cadastrado.\n");
}

function exibirAlunos() {
    if (alunos.length == 0) {
        console.log("Nenhum aluno cadastrado.\n");
        return;
    }
    console.log("***Exibindo alunos***");
    for (let a = 0; a < alunos.length; a++) {
        console.log(`--- Aluno ${a + 1} ---`);
        console.log(`Nome: ${alunos[a].nome}`);
        console.log(`Idade: ${alunos[a].idade}`);
        for (let d = 0; d < alunos[a].disciplinas.length; d++) {
            console.log(`Disciplina: ${alunos[a].disciplinas[d].disciplina} - Notas: ${alunos[a].disciplinas[d].notas ? alunos[a].disciplinas[d].notas : 'Nennhuma nota cadastrada.'}`);
        }
    };
}

function cadastrarDisciplinas(disciplina) {
    new Disciplina(disciplina);
    console.log("Disciplina cadastrada.\n");
}

function exibirDisciplinas() {
    if (disciplinas.length == 0) {
        console.log("Nenhuma disciplina cadastrada.\n");
        return;
    }
    console.clear();
    console.log("***Exibindo disciplinas***");
    for (let d = 0; d < disciplinas.length; d++) {
        console.log(disciplinas[d]);
    };
}

function selecionarAluno() {
    console.log("***Exibindo alunos cadastrados***");
    let alunoID = 1;
    for (let a = 0; a < alunos.length; a++) {
        console.log(`${alunoID} - ${alunos[a].nome}`);
        alunoID++;
    }
    let alunoEscolhido = parseInt(entrada("Digite o número do aluno selecionado: ")) - 1;
    return alunoEscolhido;
}

let sair = false;
function menuIniciar() {
    console.clear();
    console.log("--- INÍCIO ---");
    while (!sair) {
        console.log("1. Gerenciar Alunos");
        console.log("2. Gerenciar Disciplinas");
        console.log("3. Sair");
        let menu = parseInt(entrada("Escolha uma opção: "));
        switch (menu) {
            case 1:
                console.clear();
                menuAlunos();
                break;
            case 2:
                console.clear();
                menuDisciplinas();
                break;
            case 3:
                sair = true;
                console.log("Encerrando sistema.\n");
                break;
            default:
                console.log("Opção inválida.\n");
        }
    }
}

function menuAlunos() {
    console.log("--- MENU ALUNOS ---");
    while (!sair) {
        console.log("1. Cadastrar Aluno");
        console.log("2. Exibir Alunos");
        console.log("3. Cadastrar Disciplina para Aluno");
        console.log("4. Cadastrar Nota para Disciplina");
        console.log("5. Voltar");
        console.log("6. Sair");
        let submenu = parseInt(entrada("Escolha uma opçõa: "));
        switch (submenu) {
            case 1:
                console.clear();
                console.log("***Cadastro de aluno***");
                let nome = entrada("Digite o nome do aluno: ");
                let idade = entrada("Digite a idade do aluno: ");
                cadastrarAlunos(nome, idade);
                break;
            case 2:
                console.clear();
                exibirAlunos();
                break;
            case 3:
                console.clear();
                var alunoEscolhido = selecionarAluno();
                alunos[alunoEscolhido].cadastroDisciplinasAluno(alunoEscolhido);
                break;
            case 4:
                console.clear();
                if (alunos.length == 0) {
                    console.log("Nenhum aluno cadastrado.\n");
                    return;
                }
                var alunoEscolhido = selecionarAluno();
                console.log("Aluno selecionado foi: " + alunos[alunoEscolhido].nome);
                console.log("Disciplinas do aluno");
                let disciplinaID = 1;
                for (let d = 0; d < alunos[alunoEscolhido].disciplinas.length; d++) {
                    console.log(`${disciplinaID} - ${alunos[alunoEscolhido].disciplinas[d].disciplina}`);
                    disciplinaID++;
                }
                let disciplinaSelecionada = parseInt(entrada("Selecione a disciplina que deseja cadastrar a nota: ") - 1);
                console.log(`Você escolheu: ${alunos[alunoEscolhido].disciplinas[disciplinaSelecionada].disciplina}`);
                // let notas = alunos[alunoEscolhido].disciplinas.length;
                let qtd_notas = parseInt(entrada("Digite quantas notas deseja cadastrar: "));
                alunos[alunoEscolhido].disciplinas[disciplinaSelecionada].notas = [];
                for (let d_a = 0; d_a < qtd_notas; d_a++) {
                    let nota = parseFloat(entrada(`Digite a ${d_a + 1}ª nota: `));
                    alunos[alunoEscolhido].disciplinas[disciplinaSelecionada].notas.push(nota);
                }
                break;
            case 5:
                console.clear();
                menuIniciar();
                break;
            case 6:
                console.log("Encerrando sistema.\n");
                sair = true;
                break;
            default:
                console.log("Opção inválida.\n");
        }
    }
}

function menuDisciplinas() {
    console.log("--- MENU DISCIPLINAS ---");
    while (!sair) {
        console.log("1. Cadastrar Disciplina");
        console.log("2. Exibir Disciplinas");
        console.log("3. Voltar");
        console.log("4. Sair");
        let submenu = parseInt(entrada("Escolha uma opçõa: "));
        switch (submenu) {
            case 1:
                console.clear();
                console.log("***Cadastro de disciplina***");
                let disciplina = entrada("Digite o nome da disciplina: ");
                cadastrarDisciplinas(disciplina);
                break;
            case 2:
                console.clear();
                exibirDisciplinas();
                break;
            case 3:
                console.clear();
                menuIniciar();
                break;
            case 4:
                console.log("Encerrando sistema.\n");
                sair = true;
                break;
            default:
                console.log("Opção inválida.\n");
        }
    }
}

menuIniciar();