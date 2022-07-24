(function(){

   var deuses = [{name:'Aegir', power:10}, {name:'Aud', power: 5} , {name:'Balder', power:7}, {name:'Bragi', power:4}, {name: 'Búri', power:9}, {name: 'Dag', power:10}, {name:'Dellingr', power: 3}];

   var $ul_lista = document.querySelector('#ex45-lista');
   var $ul_lista_botoes = document.querySelector('#ex45-lista-botoes');
   var $ul_lista_edicao = document.querySelector('#ex45-lista-edicao');
   var $texto = document.querySelector('.ex45-texto');
   var $botao_pesquisar = document.querySelector('.ex45-botao-pesquisar');
   var $botao_cadastrar = document.querySelector('.ex45-botao-cadastrar');
   var $nome = document.querySelector('.ex45-nome');
   var $poder = document.querySelector('.ex45-poder');
   var $select = document.querySelector('.select');

   $botao_pesquisar.addEventListener('click', function pesquisar(){

      limparTela();

      if ($texto.value == '') return;

      var txt = $texto.value;

      deuses.forEach( item => {

         var n = item.name;
         var i = deuses.findIndex(item => item.name == n);

         if(item.name.toLowerCase().includes(txt)){
            adicionarLI(item.name, item.power, i);
         }
      })
   })

   $select.addEventListener('change', function ordenarLista(){

      limparTela();

      if ($select.value == 'decres'){
         deuses.sort(function(a, b){ return a.power - b.power; });
      } else if ($select.value == 'cres') {
         deuses.sort(function(a, b){ return b.power - a.power; });
      }

      criarLista();
   })

   $botao_cadastrar.addEventListener('click', function cadastrar(){

      if ($nome.value == '' || $poder.value == ''){
         alert('Preencha os campos');
         return;
      }

      deuses.push( {name: $nome.value, power: parseInt($poder.value)} );

      $nome.value = '';
      $poder.value = '';
      alert('cadastrado');
   })

   function adicionarLI(nome, poder, index){

      var $nova_li = document.createElement('li');
      $nova_li.innerHTML = nome + ', poder:' + poder;
      $ul_lista.appendChild($nova_li);

      var $nova_li_bt = document.createElement('li');

      var $novo_botao_deletar = document.createElement('button');
      $novo_botao_deletar.id = 'bt-deletar-' + index;
      $novo_botao_deletar.value = index;
      $novo_botao_deletar.innerHTML = 'deletar';

      var $novo_botao_editar = document.createElement('button');
      $novo_botao_editar.id = 'bt-editar-' + index;
      $novo_botao_editar.value = index;
      $novo_botao_editar.innerHTML = 'editar';

      $nova_li_bt.appendChild($novo_botao_deletar);
      $nova_li_bt.appendChild($novo_botao_editar);
      $ul_lista_botoes.appendChild($nova_li_bt);

      var $nova_li_edicao = document.createElement('li');

      var $nova_edicao_nome = document.createElement('input');
      $nova_edicao_nome.id = 'editar-nome-' + index;
      $nova_edicao_nome.placeholder = 'Novo nome';

      var $nova_edicao_poder = document.createElement('input');
      $nova_edicao_poder.id = 'editar-poder-' + index;
      $nova_edicao_poder.placeholder = 'Novo poder';
      $nova_edicao_poder.type = 'number';

      $nova_li_edicao.appendChild($nova_edicao_nome);
      $nova_li_edicao.appendChild($nova_edicao_poder);
      $ul_lista_edicao.appendChild($nova_li_edicao);

      var $bt_deletar = document.querySelector('#' + $novo_botao_deletar.id);
      $bt_deletar.addEventListener('click', deletar);

      var $bt_editar = document.querySelector('#' + $novo_botao_editar.id);
      $bt_editar.addEventListener('click', editar);

      $ul_lista.classList.add('ex45-formata-ul');
      $ul_lista_botoes.classList.add('ex45-formata-ul');
      $ul_lista_edicao.classList.add('ex45-formata-ul');
   }

   function deletar() {

      limparTela();

      var confirmar = confirm('Tem certeza que quer apagar este item?');

      if (confirmar) {deuses.splice(this.value, 1);}

      criarLista();
   }

   function limparTela(){
      $ul_lista.innerHTML = '';
      $ul_lista_botoes.innerHTML = '';
      $ul_lista_edicao.innerHTML = '';
   }

   function criarLista(){
      deuses.forEach( item => {
         var n = item.name;
         var i = deuses.findIndex(item => item.name == n);
         adicionarLI(item.name, item.power, i);
      })
   }

   function editar(){

      var $novo_nome = document.querySelector('#editar-nome-' + this.value);
      var $novo_poder = document.querySelector('#editar-poder-' + this.value);

      var a = $novo_nome.value;
      var b = parseInt($novo_poder.value);

      if (a == '' || b == ''){
         alert('Preencha os campos');
         return;
      }

      var confirmar = confirm('Tem certeza que quer alterar este item?');

      if (confirmar) {
         deuses.splice(this.value, 1, {name:a, power:b});
      }

      limparTela();
      criarLista();
   }
})()