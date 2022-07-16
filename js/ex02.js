(function(){

   var $numerosSalvos = document.querySelector('.ex2-numeros-salvos');
   var $quadrados = document.querySelector('.ex2-quadrados');
   var $input = document.querySelector('.ex2-caixa-de-texto');
   var $botaoSalvar = document.querySelector('.ex2-botao-salvar');
   var $botaoCalcular = document.querySelector('.ex2-botao-calcular');

   var listaDosNumeros = [0];
   var i = 0;
   
   $botaoSalvar.addEventListener('click', salvarNumero);
   $botaoCalcular.addEventListener('click', calcularQuadrado);

   function salvarNumero(){
      
      $quadrados.textContent = 'Resultado: ';

      if ($input.value === '' || isNaN($input.value) || i === 5){
         $input.value = '';
         $input.focus();
         return;
      }

      var n = $input.value;

      listaDosNumeros[i] = n;
      i++;

      $numerosSalvos.textContent += n + ' - ';

      $input.setAttribute('placeholder', 'Digite ' + (5-i) + ' números');
      $input.value = '';
      $input.focus();
   }

   function calcularQuadrado(){

      $quadrados.textContent = 'Resultado: ';

      for (j=0; j<listaDosNumeros.length; j++){
         listaDosNumeros[j] = Math.pow(listaDosNumeros[j], 2) ;
         $quadrados.textContent += listaDosNumeros[j] + ' - ';
      }

      $numerosSalvos.textContent = 'Números: ';
      listaDosNumeros = [0];
      i = 0;
      $input.setAttribute('placeholder', 'Digite 5 números');
   }

})()