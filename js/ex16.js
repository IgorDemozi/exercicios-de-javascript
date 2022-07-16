(function(){

   var btRadioOtimo = document.querySelector('#otimo');
   var btRadioBom = document.querySelector('#bom');
   var btRadioRegular = document.querySelector('#regular');
   var $input = document.querySelector('.ex16-caixa-de-texto');
   var $botaoSalvar = document.querySelector('.ex16-botao-salvar');
   var $botaoCalcular = document.querySelector('.ex16-botao-calcular');

   var listaDasOpinioes = [];
   var listaDasIdades = [];
   var i = 0;

   $botaoSalvar.addEventListener('click', salvarDados);
   $botaoCalcular.addEventListener('click', calcular);

   function salvarDados(){

      if (!btRadioOtimo.checked && !btRadioBom.checked && !btRadioRegular.checked){
         alert('Escolha uma opção');
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

      var radio = '';
      var idade = $input.value;

      if (btRadioOtimo.checked) radio = btRadioOtimo.value;
      if (btRadioBom.checked) radio = btRadioBom.value;
      if (btRadioRegular.checked) radio = btRadioRegular.value;

      listaDasOpinioes[i] = radio;
      listaDasIdades[i] = parseInt(idade);

      $input.value = '';
      $input.focus();
      i++;
   }

   function calcular(){

      var mediaOtimo = 0;
      var responderamBom = 0;
      var responderamRegular = 0;

      var porcentagemBom = 0;

      for (j=0; j<listaDasOpinioes.length; j++){
         if (listaDasOpinioes[j] == 'otimo') mediaOtimo += listaDasIdades[j];
         if (listaDasOpinioes[j] == 'bom') responderamBom++;
         if (listaDasOpinioes[j] == 'regular') responderamRegular++;
      }

      mediaOtimo = mediaOtimo/listaDasIdades.length;
      porcentagemBom = (responderamBom*100)/ listaDasOpinioes.length;
      
      alert('Média das idades dos que responderam "ótimo": ' + mediaOtimo + '\n' +
            'Porcentagem dos que responderam "bom": ' + porcentagemBom + '%\n' +
            'Quantidade de pessoas que responderam "regular": ' + responderamRegular)
   }
})()