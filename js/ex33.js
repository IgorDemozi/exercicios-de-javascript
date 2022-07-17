(function(){

   $data = document.querySelector('#ex33-data');

   var dataAtual = new Date();
   var diaAtual = dataAtual.getDate();
   var mesAtual = dataAtual.getMonth();
   var anoAtual = dataAtual.getFullYear();

   $data.innerHTML = diaAtual + '/' + (mesAtual+1) + '/' + anoAtual;
})()