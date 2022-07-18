(function(){

   var numbers = [5, 7, 1, 8, 9];

   var $lista = document.querySelector('#ex39-lista');
   var $botao1 = document.querySelector('.ex39-botao');
   var $botao2 = document.querySelector('.ex40-botao');

   $lista.innerHTML = numbers;

   $botao1.addEventListener('click', function ordemCrescente(){
      numbers.sort(function(a, b){ return a - b; });
      $lista.innerHTML = numbers;
   })

   $botao2.addEventListener('click', function ordemDecrescente(){
      numbers.sort(function(a, b){ return b - a; });
      $lista.innerHTML = numbers;
   })

})()