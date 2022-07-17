(function(){

   $data = document.querySelector('#ex34-data');

   var dataAtual = new Date();
   var mesAtual = dataAtual.getMonth();
   var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
                'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

   if (mesAtual !=12){
      $data.innerHTML = meses[mesAtual+1];
   } else {
      $data.innerHTML = meses[mesAtual];
   }
})()