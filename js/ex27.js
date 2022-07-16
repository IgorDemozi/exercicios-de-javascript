(function(){

   $anoNascimento = document.querySelector('.ex27-caixa');
   $btCalcular = document.querySelector('.ex27-botao-calcular');
   var anoAtual = new Date().getFullYear();

   $btCalcular.addEventListener('click', function(){

      var idade = anoAtual - $anoNascimento.value;

      if (idade < 18) {
         alert('Menor de idade (' + idade + ')');
      } else {
         alert('Maior de idade (' + idade + ')');
      }
   })
})()