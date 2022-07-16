(function(){

   $numero1 = document.querySelector('.ex25-caixa-1');
   $numero2 = document.querySelector('.ex25-caixa-2');
   $btMultiplicar = document.querySelector('.ex25-botao-multiplicar');

   $btMultiplicar.addEventListener('click', function(){multiplicar($numero1.value, $numero2.value)})

   function multiplicar(a, b){

      if(a == '' || b == ''){
         alert('Digite um número');
         return;
      }

      alert(a*b);
   }

})()




