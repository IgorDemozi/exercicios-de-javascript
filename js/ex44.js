(function () {

   var $cronometro = document.querySelector('#cronometro');
   var $iniciar = document.querySelector('#iniciar');
   var $pausar = document.querySelector('#pausar');
   var $parar = document.querySelector('#parar');

   $cronometro.value = 0;

   $iniciar.addEventListener('click', iniciar);
   $pausar.addEventListener('click', pausar);
   $parar.addEventListener('click', parar);

   var intervalo = null;
   var timeStampInicio = 0;
   var timeStampPause = 0;
   var timeStampDecorrido = 0;
   var rodando = false;

   function iniciar() {

      if (rodando) return;
      parar();
      rodando = true;
      timeStampInicio = Date.now();
      iniciarCronometro();
   }

   function iniciarCronometro(tempoDecorrido) {

      var t = tempoDecorrido || 0;
      intervalo = setInterval(function () {
         var timeStampAgora = Date.now();
         var diferenca = timeStampAgora - timeStampInicio;
         $cronometro.value = formataNumero(((t + diferenca) / 1000).toFixed(1));
      }, 100)
   }

   function formataNumero(n) {

      if (n < 10) {
         return "0" + n;
      }

      if (n > 60) {
         var m = parseInt(n / 60);
         var s = (n - m * 60).toFixed(1);

         if (s < 10) {
            s = "0" + s;
         }

         if (m < 10) {
            m = "0" + m;
         }

         return m + ":" + s;
      }

      return n;
   }

   function pausar() {

      if ($cronometro.value == 0) {
         return;
      }

      if (rodando) {
         clearInterval(intervalo);
         timeStampPause = Date.now();
         timeStampDecorrido += timeStampPause - timeStampInicio;
      } else {
         timeStampInicio = Date.now();
         iniciarCronometro(timeStampDecorrido);
      }

      rodando = !rodando;
   }

   function parar() {

      clearInterval(intervalo);
      $cronometro.value = 0;
      timeStampInicio = 0;
      timeStampPause = 0;
      timeStampDecorrido = 0;
      rodando = false;
   }

})()