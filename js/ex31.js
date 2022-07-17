(function(){

   $botao = document.querySelector('.ex31-botao');

   $botao.addEventListener('click', function(){
      var n = Math.floor(Math.random() * 100 + 1);
      alert(n);
   });
})()