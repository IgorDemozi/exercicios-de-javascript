(function(){

   var $mensagem = document.querySelector('.ex10-mensagem');
   var $botao1 = document.querySelector('.ex10-caixa-1');
   var $botao2 = document.querySelector('.ex10-caixa-2');
   var $botao3 = document.querySelector('.ex10-caixa-3');
   var $botao4 = document.querySelector('.ex10-caixa-4');
   var $botao5 = document.querySelector('.ex10-caixa-5');
   var $botao6 = document.querySelector('.ex10-caixa-6');

   $botao1.addEventListener('click', mudarMensagem);
   $botao2.addEventListener('click', mudarMensagem);
   $botao3.addEventListener('click', mudarMensagem);
   $botao4.addEventListener('click', mudarMensagem);
   $botao5.addEventListener('click', mudarMensagem);
   $botao6.addEventListener('click', mudarMensagem);

   function mudarMensagem(){
      $mensagem.textContent = 'Caixa ' + this.value + ' ativada';
   }
})()