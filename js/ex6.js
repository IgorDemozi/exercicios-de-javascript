(function(){

   var $nomes = document.querySelector('.ex6-nomes');
   var $nomesInvertidos = document.querySelector('.ex6-nomes-invertidos');
   var $input = document.querySelector('.ex6-caixa-de-texto');
   var $botaoSalvar = document.querySelector('.ex6-botao-salvar');
   var $botaoInverter = document.querySelector('.ex6-botao-inverter');

   var listaDosNomes = [];
   var i = 0;

   $botaoSalvar.addEventListener('click', salvarNome);
   $botaoInverter.addEventListener('click', inverterLista);

   function salvarNome(){

      $nomesInvertidos.textContent = 'Lista invertida: ';

      if($input.value === '' || !isNaN($input.value)){
         alert('Digite apenas texto');
         $input.value = '';
         $input.focus();
         return;
      }

      var n = $input.value;

      if (i == 0){
         $nomes.textContent += n;
      } else {
         $nomes.textContent += ' - ' + n;
      }

      listaDosNomes[i] = n;
      i++;
      $input.value = '';
      $input.focus();
   }

   function inverterLista(){

      $nomes.textContent = 'Nomes: ';
      listaDosNomes.reverse();

      for (j=0; j<listaDosNomes.length; j++){
         if (j == 0){
            $nomesInvertidos.textContent += listaDosNomes[j];
         } else {
            $nomesInvertidos.textContent += ' - ' + listaDosNomes[j];
         }
         
      }

      listaDosNomes = [];
      i = 0;
      $input.value = '';
      $input.focus();
   }
   
})()