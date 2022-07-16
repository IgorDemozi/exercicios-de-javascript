(function(){

   var $cpf = document.querySelector('#cpf');
   var $cpfPontuado = document.querySelector('.ex22-cpf-pontuado');

   $cpf.addEventListener('keyup', function(){
   
      var string1 = $cpf.value.slice(0, 3);
      var string2 = $cpf.value.slice(3, 6);
      var string3 = $cpf.value.slice(6, 9);
      var string4 = $cpf.value.slice(9, 11);

      if ($cpf.value.length < 3) {
         $cpfPontuado.textContent = string1;
      } else if ($cpf.value.length >= 3 && $cpf.value.length < 6){
         $cpfPontuado.textContent = string1 + '.' + string2;
      } else if ($cpf.value.length >= 6 && $cpf.value.length < 9) {
         $cpfPontuado.textContent = string1 + '.' + string2 + '.' + string3;
      } else if ($cpf.value.length >= 9) {
         $cpfPontuado.textContent = string1 + '.' + string2 + '.' + string3 + '-' + string4;
      }
   })
})()