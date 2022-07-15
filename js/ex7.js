(function(){

   var $dataSeparada = document.querySelector('.ex7-data');
   var $input = document.querySelector('.ex7-caixa-de-texto');
   var $botaoSeparar = document.querySelector('.ex7-botao-separar');

   $botaoSeparar.addEventListener('click', separarData);

   function separarData(){

      var a = $input.value;
      var a = a.split('-').reverse();

      if(a[0] == ''){
         return;
      }
      
      $dataSeparada.textContent = 'Dia:' + a[0] + ' Mês:' + a[1] + ' Ano:' + a[2];
      console.log(a);
   }
})()