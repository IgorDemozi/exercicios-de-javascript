(function(){

   var $dadosSalvos = document.querySelector('.ex15-dados')
   var btnRadioM = document.querySelector('#M-ex15');
   var btnRadioF = document.querySelector('#F-ex15');
   var $input = document.querySelector('.ex15-caixa-de-texto');
   var $botaoSalvar = document.querySelector('.ex15-botao-salvar');
   var $botaoCalcular = document.querySelector('.ex15-botao-calcular');
   var $botaoLimpar = document.querySelector('.ex15-botao-limpar');

   var listaDosSexos = [];
   var listaDasAlturas = [];
   var i = 0;

   $botaoSalvar.addEventListener('click', salvarDados);
   $botaoCalcular.addEventListener('click', calcular);
   $botaoLimpar.addEventListener('click', limpar);

   function salvarDados(){

      if (!btnRadioM.checked && !btnRadioF.checked){
         alert('Escolha M ou F');
         $input.value = '';
         $input.focus();
         return;
      }

      if($input.value === ''){
         alert('Digite uma altura');
         $input.value = '';
         $input.focus();
         return;
      }

      var r = 'a';

      if (btnRadioM.checked){
         r = btnRadioM.value;
      } else {
         r = btnRadioF.value;
      }

      var n = $input.value;

      listaDosSexos[i] = r;
      listaDasAlturas[i] = parseInt(n);
      i++;

      if (i == 0){
         $dadosSalvos.textContent += r + ', ' + n;
      } else {
         $dadosSalvos.textContent += ' - ' + r + ', ' + n;
      }

      $input.value = '';
      $input.focus();
   }

   function calcular(){
      
      var maiorAltura = 0;
      var menorAltura = 9999;
      var alturaMediaFeminina = 0;
      var homens = 0;
      var mulheres = 0;

      for (j=0; j<listaDosSexos.length; j++){

         if (maiorAltura < listaDasAlturas[j]){
            maiorAltura = listaDasAlturas[j];
         }

         if (menorAltura > listaDasAlturas[j]){
            menorAltura = listaDasAlturas[j];
         }

         if (listaDosSexos[j] === 'M'){
            homens++;
         }

         if (listaDosSexos[j] === 'F'){
            alturaMediaFeminina += listaDasAlturas[j];
            mulheres++;
         }
      }

      console.log(alturaMediaFeminina);
      console.log(mulheres);

      alturaMediaFeminina = alturaMediaFeminina/mulheres;

      alert('Maior altura: ' + maiorAltura + '\n' +
            'Menor altura: ' + menorAltura + '\n' +
            'Média de altura das mulheres: ' + alturaMediaFeminina + '\n' +
            'Número de homens: ' + homens);

      $input.value = '';
      $input.focus();
   }

   function limpar(){

      $dadosSalvos.textContent = 'Dados salvos: ';
      
      btnRadioM.checked = false;
      btnRadioF.checked = false;

      listaDasIdades = [];
      listaDasAlturas = [];
      i=0;

      $input.value = '';
      $input.focus();
   }

})()