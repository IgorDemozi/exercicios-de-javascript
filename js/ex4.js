(function(){

   var $idadesSalvas = document.querySelector('.ex4-idades-salvas');
   var $maioresDeIdade = document.querySelector('.ex4-maiores-de-idade');
   var $menoresDeIdade = document.querySelector('.ex4-menores-de-idade');
   var $input = document.querySelector('.ex4-caixa-de-texto');
   var $botaoSalvar = document.querySelector('.ex4-botao-salvar');
   var $botaoCalcular = document.querySelector('.ex4-botao-calcular');

   var listaDasIdades = [];
   var i = 0;

   $botaoSalvar.addEventListener('click', salvarIdade);
   $botaoCalcular.addEventListener('click', calcularMaioridades);
   
   function salvarIdade(){

      $maioresDeIdade.textContent = 'Maiores de idade: ';
      $menoresDeIdade.textContent = 'Menores de idade: ';

      if ($input.value === '' || isNaN($input.value)){
         alert('Digite apenas números');
         $input.value = '';
         $input.focus();
         return;
      }

      var n = $input.value;

      listaDasIdades[i] = n;
      i++;

      $idadesSalvas.textContent += n + ' - ';
      $input.value = '';
      $input.focus();
   }

   function calcularMaioridades(){

      $idadesSalvas.textContent = 'Idades: ';
      $maioresDeIdade.textContent = 'Maiores de idade: ';
      $menoresDeIdade.textContent = 'Menores de idade: ';

      var menores = 0;
      var maiores = 0;

      if (listaDasIdades.length > 0){

         for (j=0; j<listaDasIdades.length; j++){

            if (listaDasIdades[j] < 18){
               menores++;
            } else {
               maiores++;
            }
         }
      }
      
      $menoresDeIdade.textContent += menores;
      $maioresDeIdade.textContent += maiores;

      listaDasIdades = [];
      i=0;
   }
   
})()