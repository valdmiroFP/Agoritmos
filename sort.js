
var http = require('http');
var server = http.createServer( function ( request, response) {
  response.writeHead(200, {"content-Type":"text/html"});
  
  //funcao para ordenar de forma crescente
  function ordemCrescente( lista[] ) {
    var aux;
    for(var i = 0; i < lista.length; i++) {
      for(var j = 0; j < lista.length; j++) {
    
        if(list[j] > list[j + 1]) {
          aux = list[j];
          list[j] = list[j + 1];
          list[j + 1] = aux;
        }
      }
    }
  }
  
  //funcao para ordenar de forma crescente
  function ordemDecrescente( lista[] ) {
    var aux;
    for(var i = 0; i < lista.length; i++) {
      for(var j = 0; j < lista.length; j++) {
  
        if(list[j] < list[j + 1]) {
          aux = list[j];
          list[j] = list[j + 1];
          list[j + 1] = aux;
        }
      }
    }
  }
  
  //ler os 5 valores e guardar numa lista 
  var lista = [];
  for(var i=0; i < 5; i++) {
    lista[i] = response.prompt("digite o valor" + i + ":");
  }
  
  //mostra o array ordenado de forma crescente e decrescente
  response.write( ordemCrescente( lista ) );
  response.write( ordemDecrescente( lista ) );
  response.end();
});

server.listen(8080);
