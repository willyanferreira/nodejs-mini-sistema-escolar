const entrada = require("prompt-sync")();
const alunos = [];
const disciplinas = []

function cadastrarAlunos(nome, idade) {
    alunos.push({ nome, idade });
    console.log("Aluno cadastrado.\n");
}

function cadastrarDisciplinas(disciplina) {
    let id = disciplinas.length;
    disciplinas.push({ 'id': id + 1, 'disciplina': disciplina });
    console.log("Disciplina cadastrada.\n");
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
        if (alunos[a].disciplinas) {
            for (let d = 0; d < alunos[a].disciplinas.length; d++) {
                console.log(`Disciplina: ${alunos[a].disciplinas[d].disciplina}\nNotas: ${alunos[a].disciplinas[d].notas ? alunos[a].disciplinas[d].notas : 'Nennhuma nota cadastrada.'}\nFaltas: ${alunos[a].disciplinas[d].faltas ? alunos[a].disciplinas[d].faltas : "Aluno sem faltas"}`);
            }
        }
    };
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

function cadastroDisciplinasAluno(aluno) {
    console.clear();
    console.log("***Exibindo disciplinas cadastradas***");
    let disciplinaID = 1;
    for (let d = 0; d < disciplinas.length; d++) {
        console.log(`${disciplinaID} - ${disciplinas[d].disciplina}`);
        disciplinaID++;
    }
    let disciplinaSelecionada = parseInt(entrada("Digite o número da disciplina selecionada: ")) - 1;
    if (!alunos[aluno].disciplinas) {
        alunos[aluno].disciplinas = [];
    }
    alunos[aluno].disciplinas.push({'id': disciplinas[disciplinaSelecionada].id , 'disciplina': disciplinas[disciplinaSelecionada].disciplina})
}

function cadastroNotasDisciplina(aluno) {
    console.clear();
    console.log("***Exibindo disciplinas do aluno***");
    let disciplinaSelecionada = exibirDisciplinasAluno(aluno);
    if (!alunos[aluno].disciplinas[disciplinaSelecionada].notas) {
        alunos[aluno].disciplinas[disciplinaSelecionada].notas = [];
    }
    let notas = parseInt(entrada("Digite a quantidade de notas: "));
    for (let n = 0; n < notas; n++) {
        let nota = parseFloat(entrada(`Digite a ${n + 1}a nota: `));
        alunos[aluno].disciplinas[disciplinaSelecionada].notas.push(nota);
    }

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

function exibirDisciplinasAluno(alunoID) {
    if (alunos.length == 0) {
        console.log("Nenhum aluno cadastrado.\n");
        return;
    }
    let disciplinaID = 1;
    for (let d = 0; d < alunos[alunoID].disciplinas.length; d++) {
        console.log(`${disciplinaID} - ${alunos[alunoID].disciplinas[d].disciplina}`);
        disciplinaID++;
    }
    let disciplinaSelecionada = parseInt(entrada("Selecione a disciplina que deseja cadastrar a(s) nota(s): ") - 1);
    // console.log(`Você escolheu: ${alunos[alunoID].disciplinas[disciplinaSelecionada].disciplina}`);
    return disciplinaSelecionada;
    // let qtd_faltas = parseInt(entrada("Digite a quantidade de falta(s): "));
    // alunos[alunoID].disciplinas[disciplinaSelecionada].faltas = qtd_faltas;
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
        console.log("5. Cadastrar Falta para Disciplina");
        console.log("6. Calcular Média");
        console.log("7. Voltar");
        console.log("8. Sair");
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
                {
                    let alunoEscolhido = selecionarAluno();
                    cadastroDisciplinasAluno(alunoEscolhido);
                }
                break;
            case 4:
                console.clear();
                {
                    let alunoEscolhido = selecionarAluno();
                    cadastroNotasDisciplina(alunoEscolhido);
                }
                break;
            case 5:
                console.clear();
                break;
            case 6:
                console.clear();
                console.log("Calculando média");
                break;
            case 7:
                console.clear();
                menuIniciar();
                break;
            case 8:
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