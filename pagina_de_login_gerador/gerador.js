//componentes
let campoSenha= document.getElementById('campo-senha')
let botao = document.getElementById('botao-gerar')
let regSenha ='!@#$%&*0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';

botao.addEventListener('click', ()=>{

    let senhaAtual = ''

    for(let i = 0; i<20; i++){
        senhaAtual += regSenha[Math.floor(Math.random() * regSenha.length)]
    }

    campoSenha.value= senhaAtual
})



/*Explicação Detalhada
1. Seleção dos Elementos HTML
document.getElementById('campo-senha'): Seleciona o elemento HTML com o ID campo-senha e o armazena na variável campoSenha.
document.getElementById('botao-gerar'): Seleciona o elemento HTML com o ID botao-gerar e o armazena na variável botao.. 

2. Definição de Caracteres Possíveis para a Senha
regSenha é uma string que contém todos os caracteres possíveis que podem ser usados para gerar a senha.

3. Adicionando um Event Listener ao Botão
botao.addEventListener('click', ...) adiciona um evento de escuta ao botão. Quando o botão é clicado, a função definida dentro do addEventListener é executada.

4. Gerando a Senha
let senhaAtual = '': Inicializa a variável senhaAtual como uma string vazia, que será usada para construir a senha gerada.

for (let i = 0; i < 20; i++) { ... }: Um loop for que executa 20 vezes, significando que a senha gerada terá 20 caracteres.
Math.random() * regSenha.length: Gera um número aleatório entre 0 e o comprimento de regSenha.
Math.floor(...): Arredonda o número aleatório para baixo para obter um índice válido.
regSenha[...]: Seleciona um caractere da string regSenha usando o índice gerado aleatoriamente.
senhaAtual += ...: Adiciona o caractere selecionado à senhaAtual.

5. Atribuindo a Senha ao Campo de Texto
campoSenha.value = senhaAtual: Define o valor do campo de texto campoSenha para a senha gerada senhaAtual


*/