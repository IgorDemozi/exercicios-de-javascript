(function(){

   var deuses = ['Aegir', 'Aud', 'Balder'];
   var deuses2 = ['Loki', 'Odin', 'Frey'];

   var $lista = document.querySelector('#ex35-lista');
   var $botao1 = document.querySelector('.ex36-botao');
   var $botao2 = document.querySelector('.ex37-botao');
   var $botao3 = document.querySelector('.ex38-botao');

   $lista.innerHTML = deuses.length;

   $botao1.addEventListener('click', exibirDeuses)

   $botao2.addEventListener('click', function exibirMap(){
      deuses.map(exibir);
   })
   function exibir(a) {
      alert(a);
   }

   $botao3.addEventListener('click', function exibirExtra(){
      deuses2.forEach( item => {deuses.push(item);} )
      $lista.innerHTML = deuses.length;
      exibirDeuses();
   })

   function exibirDeuses(){
      deuses.forEach( item => {alert(item);} )
   }
})()