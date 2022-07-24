(function () {

   var $relogio = document.querySelector('.relogio');

   function getHora() {
      var data = new Date();
      var horas = formatar(data.getHours());
      var minutos = formatar(data.getMinutes());
      var segundos = formatar(data.getSeconds());

      return horas + ":" + minutos + ":" + segundos;
   }

   function formatar(t) {
      return t < 10 ? "0" + t : t;
   }

   $relogio.textContent = getHora();

   setInterval(function () {
      $relogio.textContent = getHora();
   }, 1000)
})()