(function () {

   var $cpfPontuado = document.querySelector('#cpfPoint');
   var $cpfNormal = document.querySelector('.ex23-cpf');

   var vetorFiltrado = [];

   $cpfPontuado.addEventListener('keyup', function () {

      var vetorCpf = $cpfPontuado.value.split('');
      var a = vetorCpf.length - 1;

      if (vetorCpf[a] == '.' || vetorCpf[a] == '-') {
         return;
      } else {
         vetorFiltrado[a] = vetorCpf[a];
      }

      $cpfNormal.textContent = vetorFiltrado.join('');
   })
})()