(function(){

   var $caixa2 = document.querySelector('.ex11-caixa-2');
   var $caixa3 = document.querySelector('.ex11-caixa-3');
   var $caixa4 = document.querySelector('.ex11-caixa-4');
   var $caixa5 = document.querySelector('.ex11-caixa-5');
   var $caixa6 = document.querySelector('.ex11-caixa-6');

   $caixa2.addEventListener('click', mensagem);
   $caixa3.addEventListener('click', mensagem);
   $caixa4.addEventListener('click', mensagem);
   $caixa5.addEventListener('click', mensagem);
   $caixa6.addEventListener('click', mensagem);

   function mensagem(){
      this.value = 'perdeu o foco';
      alert('perdeu o foco');
   }
})()