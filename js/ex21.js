(function(){

   var $nome = document.querySelector('.ex21-caixa-nome');
   var $sobrenome = document.querySelector('.ex21-caixa-sobrenome');
   var $saudacao = document.querySelector('.ex21-botao-saudação');

   $saudacao.addEventListener('click', function(){

      if ($nome.value == '' && $sobrenome.value == ''){
         alert('Olá');
      } else if ($nome.value == '') {
         alert('Olá, ' + $sobrenome.value);
      } else {
         alert('Olá, ' + $nome.value + ' ' + $sobrenome.value);
      }
   })
})()
      