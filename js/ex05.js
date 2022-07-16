(function(){

   var $dadosSalvos = document.querySelector('.ex5-dados')
   var $qtdHomens = document.querySelector('.ex5-homens');
   var $qtdMulheres = document.querySelector('.ex5-mulheres');
   var $maiorAltura = document.querySelector('.ex5-maior-altura');
   var btnRadioM = document.querySelector('#M');
   var btnRadioF = document.querySelector('#F');
   var $input = document.querySelector('.ex5-caixa-de-texto');
   var $botaoSalvar = document.querySelector('.ex5-botao-salvar');
   var $botaoCalcular = document.querySelector('.ex5-botao-calcular');

   var listaDosSexos = [];
   var listaDasAlturas = [];
   var i = 0;

   $botaoSalvar.addEventListener('click', salvarDados);
   $botaoCalcular.addEventListener('click', calcular);

   function salvarDados(){

      $qtdHomens.textContent = 'Homens: ';
      $qtdMulheres.textContent = 'Mulheres: ';
      $maiorAltura.textContent = 'Maior altura: ';

      if (!btnRadioM.checked && !btnRadioF.checked){
         alert('Escolha M ou F');
         $input.value = '';
         $input.focus();
         return;
      }

      if ($input.value === '' || isNaN($input.value) || i === 5){
         alert('Digite apenas números (no máximo 5) \nSe usar números decimais, separe com ponto');
         $input.value = '';
         $input.focus();
         return;
      }

      var r = 'a';

      if (btnRadioM.checked){
         var r = btnRadioM.value;
      } else {
         var r = btnRadioF.value;
      }

      var n = $input.value;

      listaDosSexos[i] = r;
      listaDasAlturas[i] = n;
      i++;

      $dadosSalvos.textContent += r + ', ' + n + ' - ';

      $input.setAttribute('placeholder', 'Digite ' + (5-i) + ' alturas');
      $input.value = '';
      $input.focus();
   }

   function calcular(){

      $dadosSalvos.textContent = 'Dados salvos: ';
      $qtdHomens.textContent = 'Homens: ';
      $qtdMulheres.textContent = 'Mulheres: ';
      $maiorAltura.textContent = 'Maior altura: ';
      
      var homens = 0;
      var mulheres = 0;
      var maiorAltura = 0;
      var alturaMF = '';

      for (j=0; j<listaDosSexos.length; j++){

         if (listaDosSexos[j] === 'M'){
            homens++;
         } else {
            mulheres++;
         }

         if(maiorAltura < listaDasAlturas[j]){
            maiorAltura = listaDasAlturas[j];
            alturaMF = listaDosSexos[j];
         }
      }

      $qtdHomens.textContent += homens;
      $qtdMulheres.textContent += mulheres;
      $maiorAltura.textContent += maiorAltura + ', ' + alturaMF;

      $input.setAttribute('placeholder', 'Digite 5 alturas');
      listaDasIdades = [];
      listaDasAlturas = [];
      i=0;
   }

})()