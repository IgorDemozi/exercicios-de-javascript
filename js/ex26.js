(function(){

   $numero = document.querySelector('.ex26-caixa');
   $btDesconto = document.querySelector('.ex26-botao-desconto');

   $btDesconto.addEventListener('click', function(){
      alert('O deconto é de R$' + ($numero.value*0.05).toFixed(2));
   })
})()