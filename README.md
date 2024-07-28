# Aplicação de Cadastro e Controle de Alunos
Esta aplicação é projetada para gerenciar o cadastro de alunos, matérias, notas e faltas. Ela realiza cálculos de média e avalia o status de aprovação ou reprovação com base nas notas e no número de faltas.

## Funcionalidades

### Cadastro do Aluno
- Solicita o nome e idade do aluno.

### Cadastro das Matérias
- Permite ao aluno cadastrar N matérias.

### Cadastro de Notas
- Para cada matéria cadastrada, o usuário pode cadastrar N notas.

###  Cálculo de Média
- Calcula a média individual de cada matéria ou de todas as matérias com base nas notas fornecidas.

### Cadastro e Contabilização de Faltas
- Solicita o número de faltas para uma matéria indicada pelo usuário.
- Verifica se o aluno está reprovado por faltas (mais de N faltas em qualquer matéria) apenas quando o usuário consulta o boletim.
- O usuário indica a quantidade máxima de faltas toleradas.

### Resultados
- Exibe todos os alunos
- Exibe a média de cada matéria.
- Indica se o aluno está aprovado ou reprovado em cada matéria, considerando tanto a média das notas quanto as faltas.

## Como Usar
- Faça um clone deste repositório para sua máquina local.
- Abre a pastar do projeto e em seguida navega até o diretório backend.
- Utilize o CLI de sua preferência.
- Execute o comando ***npm init*** e em seguida execute ***npm install prompt-sync***.
- Para iniciar a aplicação execute o comando ***node ./index.js.***

## Requisitos
- ***Node.js.***
- ***prompt-sync***

## Contribuição
Se você quiser contribuir para a aplicação, sinta-se à vontade para abrir um pull request ou relatar problemas.

## Licença
Este projeto está licenciado sob a ISC License.