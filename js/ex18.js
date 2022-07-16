(function(){

   var btRadioM = document.querySelector('#M-ex18');
   var btRadioF = document.querySelector('#F-ex18');
   var $entradaIdade = document.querySelector('.ex18-caixa-idade');
   var $entradaPeso = document.querySelector('.ex18-caixa-peso');
   var $botaoSalvar = document.querySelector('.ex18-botao-salvar');
   var $botaoCalcular = document.querySelector('.ex18-botao-calcular');

   var listaSexos = [];
   var listaIdades = [];
   var listaPesos = [];
   var i = 0;

   $botaoSalvar.addEventListener('click', salvarDados);
   $botaoCalcular.addEventListener('click', calcular);

   function salvarDados(){

      if (!btRadioM.checked && !btRadioF.checked){
         alert('Escolha M ou F');
         return;
      }

      if($entradaIdade.value === ''){
         alert('Digite a idade');
         $entradaIdade.value = '';
         $entradaIdade.focus();
         return;
      }

      if($entradaPeso.value === ''){
         alert('Digite o peso');
         $entradaPeso.value = '';
         $entradaPeso.focus();
         return;
      }

      if (btRadioM.checked) {
         listaSexos[i] = btRadioM.value;
      } else {
         listaSexos[i] = btRadioF.value;
      }

      listaIdades[i] = parseInt($entradaIdade.value);
      listaPesos[i] = parseInt($entradaPeso.value);

      console.log(listaSexos);
      console.log(listaIdades);
      console.log(listaPesos);

      i++;
      $entradaIdade.value = '';
      $entradaPeso.value = '';
      $entradaIdade.focus();
   }

   function calcular(){

      var homens = 0;
      var mulheres = 0;
      var mediaIdadeHomens = 0;
      var mediaPesoMulheres = 0;

      for (j=0; j < listaSexos.length; j++){

         if (listaSexos[j] == 'M'){
            homens++;
            mediaIdadeHomens += listaIdades[j];
         } else {
            mulheres++;
            mediaPesoMulheres += listaPesos[j];
         }
      }

      mediaIdadeHomens = mediaIdadeHomens/homens;
      mediaPesoMulheres = mediaPesoMulheres/mulheres;

      alert('Total de homens: ' + homens + '\n' +
            'Total de mulheres: ' + mulheres + '\n' +
            'Média das idades dos homens: ' + mediaIdadeHomens + '\n' +
            'média dos pesos das mulheres: ' + mediaPesoMulheres
      );

      $entradaIdade.value = '';
      $entradaPeso.value = '';
      $entradaIdade.focus();
   }

   })()