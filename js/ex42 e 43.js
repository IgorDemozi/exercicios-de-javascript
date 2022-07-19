(function(){

   var $item = document.querySelector('.ex42-item');
   var $botao = document.querySelector('.ex42-botao');
   var $ul_lista = document.querySelector('#ex42-lista');
   var itens = [];

   $botao.addEventListener('click', function incluir(){

      var $nova_li = document.createElement('li');

      $nova_li.innerHTML = $item.value;
      itens.push($item.value);

      if ((itens.length % 2) == 0){
         $nova_li.classList.add('texto-destaque')
      }

      $ul_lista.appendChild($nova_li);
      $item.value = '';
      $item.focus();

      console.log(itens);
   })
})()