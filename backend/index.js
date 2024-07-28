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
    console.clear();
    if (alunos.length == 0) {
        console.log("Nenhum aluno cadastrado.\n");
        return;
    }
    console.log("***Exibindo alunos***");
    for (let a = 0; a < alunos.length; a++) {
        console.log(alunos[a].nome);
    }
    entrada("\nPressione ENTER para continuar...");
    console.clear();
}

function exibirDisciplinas() {
    console.clear();
    if (disciplinas.length == 0) {
        console.log("Nenhuma disciplina cadastrada.\n");
        return;
    }
    console.log("***Exibindo disciplinas***");
    for (let d = 0; d < disciplinas.length; d++) {
        console.log(disciplinas[d]);
    };
}

function cadastroDisciplinasAluno(aluno) {
    console.clear();
    if (alunos.length == 0) {
        console.log("Nenhum aluno cadastrado.\n");
        return;
    }
    if (disciplinas.length == 0) {
        console.log("Nenhuma disciplina cadastrada.\n");
        return;
    }
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
    alunos[aluno].disciplinas.push({ 'id': disciplinas[disciplinaSelecionada].id, 'disciplina': disciplinas[disciplinaSelecionada].disciplina })
}

function cadastroNotasDisciplina(aluno) {
    console.clear();
    if (alunos.length == 0) {
        console.log("Nenhum aluno cadastrado.\n");
        return;
    }
    if (disciplinas.length == 0) {
        console.log("Nenhuma disciplina cadastrada.\n");
        return;
    }
    if (!('disciplinas' in alunos[aluno])) {
        console.log("Alunos sem disciplinas.\n");
        return;
    }
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

function cadastroFaltasDisciplinas(aluno) {
    console.clear();
    if (alunos.length == 0) {
        console.log("Nenhum aluno cadastrado.\n");
        return;
    }
    if (disciplinas.length == 0) {
        console.log("Nenhuma disciplina cadastrada.\n");
        return;
    }
    if (!('disciplinas' in alunos[aluno])) {
        console.log("Alunos sem disciplinas.\n");
        return;
    }
    console.log("***Exibindo disciplinas do aluno***");
    let disciplinaSelecionada = exibirDisciplinasAluno(aluno);
    if (!alunos[aluno].disciplinas[disciplinaSelecionada].faltas) {
        alunos[aluno].disciplinas[disciplinaSelecionada].faltas = [];
    }
    let faltas = parseInt(entrada("Digite a quantidade de faltas: "));
    alunos[aluno].disciplinas[disciplinaSelecionada].faltas.push(faltas);
}

function calcularMedia(aluno) {
    console.clear();
    if (alunos.length == 0) {
        console.log("Nenhum aluno cadastrado.\n");
        return;
    }
    if (disciplinas.length == 0) {
        console.log("Nenhuma disciplina cadastrada.\n");
        return;
    }
    if (!('disciplinas' in alunos[aluno])) {
        console.log("Alunos sem disciplinas.\n");
        return;
    }
    console.log("1 - Uma única disciplina.\n2 - Todas as disciplinas.\n");
    const tipoDeMedia = parseInt(entrada("Selecione o tipo de média: "));
    switch (tipoDeMedia) {
        case 1:
            {
                console.log("***Exibindo disciplinas do aluno***");
                let disciplinaSelecionada = exibirDisciplinasAluno(aluno);
                if (!('notas' in alunos[aluno].disciplinas[disciplinaSelecionada])) {
                    console.log("Disciplina sem nota.\n");
                    return;
                }
                if (alunos[aluno].disciplinas[disciplinaSelecionada].notas.length == 1) {
                    console.log(`A média do aluno ${alunos[aluno].disciplinas[disciplinaSelecionada].disciplina} é ${alunos[aluno].disciplinas[disciplinaSelecionada].notas[0]}`);
                    return;
                }
                let somaNotas = 0;
                for (let d = 0; d < alunos[aluno].disciplinas[disciplinaSelecionada].notas.length; d++) {
                    somaNotas += alunos[aluno].disciplinas[disciplinaSelecionada].notas[d];
                }
                const media = somaNotas / alunos[aluno].disciplinas[disciplinaSelecionada].notas.length;
                console.log(`A média do aluno é ${media.toFixed(1)}`);
            }
            break;
        case 2:
            {
                for (let d = 0; d < alunos[aluno].disciplinas.length; d++) {
                    if (!('notas' in alunos[aluno].disciplinas[d])) {
                        console.log(`Disciplina ${alunos[aluno].disciplinas[d].disciplina} sem nota.`);
                        continue;
                    }
                    let somaNotas = 0;
                    for (let n = 0; n < alunos[aluno].disciplinas[d].notas.length; n++) {
                        somaNotas += alunos[aluno].disciplinas[d].notas[n];
                    }
                    const media = somaNotas / alunos[aluno].disciplinas[d].notas.length;
                    console.log(`A média do(a) aluno(a) em ${alunos[aluno].disciplinas[d].disciplina} é ${media.toFixed(1)}`);
                }
            }
            break;
        default:
            console.log("Opção inválida.\n");
    }
}

function selecionarAluno() {
    console.clear();
    if (alunos.length == 0) {
        console.log("Nenhum aluno cadastrado.\n");
        return;
    }
    if (disciplinas.length == 0) {
        console.log("Nenhuma disciplina cadastrada.\n");
        return;
    }
    console.log("***Exibindo  cadastrados***");
    let alunoID = 1;
    for (let a = 0; a < alunos.length; a++) {
        console.log(`${alunoID} - ${alunos[a].nome}`);
        alunoID++;
    }
    let alunoEscolhido = parseInt(entrada("Digite o número do aluno selecionado: ")) - 1;
    return alunoEscolhido;
}

function exibirDisciplinasAluno(alunoID) {
    console.clear();
    if (alunos.length == 0) {
        console.log("Nenhum aluno cadastrado.\n");
        return;
    }
    let disciplinaID = 1;
    for (let d = 0; d < alunos[alunoID].disciplinas.length; d++) {
        console.log(`${disciplinaID} - ${alunos[alunoID].disciplinas[d].disciplina}`);
        disciplinaID++;
    }
    let disciplinaSelecionada = parseInt(entrada("Selecione a disciplina: ") - 1);
    return disciplinaSelecionada;
}

function boletim() {
    console.clear();
    if (alunos.length == 0) {
        console.log("Nenhum aluno cadastrado.\n");
        return;
    }
    function retornaMedia(notas) {
        if (notas.length == 1) {
            return notas[0];
        }
        let somaNotas = 0;
        for (let d = 0; d < notas.length; d++) {
            somaNotas += notas[d];
        }
        const media = somaNotas / notas.length;
        return media;
    }
    const maximoDeFaltas = parseInt(entrada("Digite o máximo de faltas permitidas: "));
    const mediaMinima = parseInt(entrada("Digite a média mínima: "));
    console.clear();
    console.log("*** BOLETIM ***");
    for (let a = 0; a < alunos.length; a++) {
        console.log(`--- Estudante ${a + 1} ---`);
        console.log(`Nome: ${alunos[a].nome}`);
        console.log(`Idade: ${alunos[a].idade}`);
        if (alunos[a].disciplinas) {
            for (let d = 0; d < alunos[a].disciplinas.length; d++) {
                console.log(`Disciplina: ${alunos[a].disciplinas[d].disciplina}`);
                console.log(`Nota(s): ${alunos[a].disciplinas[d].notas ? alunos[a].disciplinas[d].notas : 'Nennhuma nota cadastrada.'}`);
                var media = 0;
                if (alunos[a].disciplinas[d].notas) {
                    media = retornaMedia(alunos[a].disciplinas[d].notas);
                    console.log(`A média do(a) aluno(a) em ${alunos[a].disciplinas[d].disciplina} é ${media.toFixed(1)}`);
                }
                console.log(`Falta(s): ${alunos[a].disciplinas[d].faltas ? alunos[a].disciplinas[d].faltas : "Aluno(a) sem faltas"}`);
                if (alunos[a].disciplinas[d].notas && media < mediaMinima) {
                    console.log('Status: Reprovado(a) por média');
                } else if (alunos[a].disciplinas[d].faltas && alunos[a].disciplinas[d].faltas > maximoDeFaltas) {
                    console.log('Status: Reprovado(a) por falta');
                } else if (alunos[a].disciplinas[d].notas && media >= mediaMinima || alunos[a].disciplinas[d].faltas && alunos[a].disciplinas[d].faltas > maximoDeFaltas) {
                    console.log('Status: Aprovado(a)');
                }
            }
        }
    }
    entrada("\nPressione ENTER para continuar...");
    console.clear();
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
                menuAlunos();
                break;
            case 2:
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
    console.clear();
    console.log("--- MENU ALUNOS ---");
    while (!sair) {
        console.log("1. Cadastrar Aluno");
        console.log("2. Exibir Alunos");
        console.log("3. Cadastrar Disciplina para Aluno");
        console.log("4. Cadastrar Nota para Disciplina");
        console.log("5. Cadastrar Falta para Disciplina");
        console.log("6. Calcular Média");
        console.log("7. Boletim");
        console.log("8. Voltar");
        console.log("9. Sair");
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
                exibirAlunos();
                break;
            case 3:
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
                {
                    let alunoEscolhido = selecionarAluno();
                    cadastroFaltasDisciplinas(alunoEscolhido);
                }
                break;
            case 6:
                console.clear();
                {
                    let alunoEscolhido = selecionarAluno();
                    calcularMedia(alunoEscolhido);
                }
                break;
            case 7:
                boletim();
                break;
            case 8:
                menuIniciar();
                break;
            case 9:
                console.log("Encerrando sistema.\n");
                sair = true;
                break;
            default:
                console.clear();
                console.log("Opção inválida.\n");
        }
    }
}

function menuDisciplinas() {
    console.clear();
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
                exibirDisciplinas();
                break;
            case 3:
                menuIniciar();
                break;
            case 4:
                console.log("Encerrando sistema.\n");
                sair = true;
                break;
            default:
                console.clear();
                console.log("Opção inválida.\n");
        }
    }
}

menuIniciar();