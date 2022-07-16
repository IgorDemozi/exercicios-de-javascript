(function(){

   $ex24Container = document.querySelector('#ex24-container');
   $btVerde = document.querySelector('.ex24-botao-verde');
   $btVermelho = document.querySelector('.ex24-botao-vermelho');

   $btVerde.addEventListener('click', function(){
      $ex24Container.setAttribute('style', 'background-color: green;');
   })

   $btVermelho.addEventListener('click', function(){
      $ex24Container.setAttribute('style', 'background-color: red;');
   })


})()