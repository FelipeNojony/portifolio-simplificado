/*
Objetivo 1 - quando o usuario clicar no botão de mostrar mais deve abrir os projetos que estão escondido no html

     Passo 1 - pegar o botão monstrar mais no JS pra poder verificar quando o usuario clicar em cima dele

     Passo 2 - identificar o clique no botão

     Passo 3 - adicionar a classe "ativo" nos projetos escondidos

Objetivo 2 - esconder o botão mostrar mais

     Passo 1 - pegar o botão e esconder ele    
*/

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}