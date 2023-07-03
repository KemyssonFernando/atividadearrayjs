// atividade fixação questao 1
var valores = [25, 23, 11, 55, 30, 6, 4, 21, 34, 89, 56];
valores.sort(function(a, b) {
  return a - b;
});

console.log(valores);
// atatividade fixação questao 2
var time = ['Santos','Sport','Santa Cruz','Vasco','Chapecó'];
time.splice(5,1,'Flamengo');
time.shift();
time.unshift('Palmeiras');
time.splice(6,1,'gremio');
time.unshift('São paulo','Santos');
console.log(time);
console.log(time.length);
time.pop();
console.log(time);
time.sort();
console.log(time);
// atividade fixação questao 3
var Atividade =  ['tomar banho','caminhar','café da manhã','almoçar','dirigir','lavar moto','lava prato'];
console.log(Atividade.reverse());
console.log(Atividade);
console.log (Atividade[3]);
console.log (Atividade[6]);
console.log(Atividade.join('-'));
var Atividade2 = ['comer','jogar Bola'];
var novaAtividade = Atividade.concat(Atividade2);
console.log(novaAtividade);
// atividade fixação questao 4
var cidades =  ['jaboatão','recife','buique','serra talhada','bonito'];
cidades.sort();
console.log(cidades);
cidades.shift();
console.log(cidades);
cidades.pop();
console.log(cidades);
