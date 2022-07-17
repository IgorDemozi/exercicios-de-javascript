(function(){

   $divResultado = document.querySelector('#resultado');
   $btX1 = document.querySelector('.ex28-botao-x1');
   $btX2 = document.querySelector('.ex28-botao-x2');
   $btX20 = document.querySelector('.ex28-botao-x20');
   $btX5forEach = document.querySelector('.ex28-botao-x5-forEach');
   $btX5while = document.querySelector('.ex28-botao-x5-while');
   $btX5doWhile = document.querySelector('.ex28-botao-x5-do-while');

   $bt_0a10 = document.querySelector('.ex29-botao-0-a-10');
   $bt_2a20 = document.querySelector('.ex29-botao-2-a-20');

   var lista = ['<p>Repetição</p>', 
                '<p>Repetição</p>', 
                '<p>Repetição</p>', 
                '<p>Repetição</p>', 
                '<p>Repetição</p>'];

   $btX1.addEventListener('click', function(){
      $divResultado.innerHTML = 'Repetição';
   })

   $btX2.addEventListener('click', function(){
      $divResultado.innerHTML = '<p>Repetição</p><p>Repetição</p>';
   })

   $btX20.addEventListener('click', function(){
      $divResultado.innerHTML = '';
      for(i=0; i<20; i++){
         $divResultado.innerHTML += '<p>Repetição ' + (i+1) + '</p>';
      }
   })

   $btX5forEach.addEventListener('click', function(){
      $divResultado.innerHTML = '';
      lista.forEach(item => {
         $divResultado.innerHTML += item;
      })
   })

   $btX5while.addEventListener('click', function(){

      var i = 0;
      $divResultado.innerHTML = '';

      while(i < 5){
         $divResultado.innerHTML += '<p>Repetição ' + (i+1) + '</p>';
         i++;
      }
   })

   $btX5doWhile.addEventListener('click', function(){

      var i = 0;
      $divResultado.innerHTML = '';

      do {
         $divResultado.innerHTML += '<p>Repetição ' + (i+1) + '</p>';
         i++;
      } while(i < 5) ;
   })

   $bt_0a10.addEventListener('click', function(){
      $divResultado.innerHTML = '';
      for(i=0; i<10; i++){
         $divResultado.innerHTML += '<p> ' + (i+1) + '</p>';
      }
   })

   $bt_2a20.addEventListener('click', function(){
      $divResultado.innerHTML = '';
      for(i=0; i<10; i++){
         $divResultado.innerHTML += '<p> ' + (i+1)*2 + '</p>';
      }
   })
})()