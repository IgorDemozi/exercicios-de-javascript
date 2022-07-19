(function(){

   var deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr'];
   var $ul_lista = document.querySelector('#nomes');

   deuses.forEach( item => {

      var $nova_li = document.createElement('li');
      $nova_li.innerHTML = item;
      $ul_lista.appendChild($nova_li);
   })
})()