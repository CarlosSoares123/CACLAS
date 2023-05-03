
/*===========Mostrar as respostas das perguntas ==========*/

const pergunta = document.querySelectorAll('[data-pergunta]')

const resposta = function () {
  this.classList.toggle('ativa')
}

addEventOnElem(pergunta, 'click', resposta);

