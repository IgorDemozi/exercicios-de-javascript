(function(){

   var $numerosSalvos = document.querySelector('.ex3-numeros-salvos');
   var $maiorNumero = document.querySelector('.ex3-maior-numero');
   var $input = document.querySelector('.ex3-caixa-de-texto');
   var $botaoSalvar = document.querySelector('.ex3-botao-salvar');
   var $botaoCalcular = document.querySelector('.ex3-botao-calcular');

   var listaDosNumeros = [0];
   var i = 0;

   $botaoSalvar.addEventListener('click', salvarNumero);
   $botaoCalcular.addEventListener('click', calcularMaiorNumero);

   function salvarNumero(){
      
      $maiorNumero.textContent = 'Maior número: ';

      if ($input.value === '' || isNaN($input.value) || i === 5){
         $input.value = '';
         $input.focus();
         return;
      }

      var n1 = $input.value;

      listaDosNumeros[i] = n1;
      i++;

      $numerosSalvos.textContent += n1 + ' - ';

      $input.setAttribute('placeholder', 'Digite ' + (5-i) + ' números');
      $input.value = '';
      $input.focus();
   }

   function calcularMaiorNumero(){

      $maiorNumero.textContent = 'Maior número: ';
      $numerosSalvos.textContent = 'Números: ';
      var n2 = 0;

      for (j=0; j<listaDosNumeros.length; j++){
         
         if (n2 < listaDosNumeros[j]) {
            n2 = listaDosNumeros[j];
         }
      }

      $maiorNumero.textContent += n2;
      listaDosNumeros = [0];
      i=0;
      $input.setAttribute('placeholder', 'Digite 5 números');
   }
})()