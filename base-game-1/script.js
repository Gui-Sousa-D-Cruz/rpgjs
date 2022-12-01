/*function d20(a,b){
    return Math.floor(Math.random() * (b - a + 1)) + a
    }*/

/*var rolard20 = document.getElementById('#')
rolard20.addEventListener('click', function(){
   var res = Math.floor(Math.random() * (20 - 1 + 1)) + 1
   var d20 = document.getElementById('d20')
   var restxt = document.getElementById('resultado')
   d20.innerHTML = res
   restxt.innerHTML = 'Seu resultado foi: '
}) */

var btn1 = document.getElementById('btn1')
btn1.addEventListener('click', function(){
    var tela = document.getElementById('tela')
    tela.innerHTML = 'Lamento, no momento ainda estamos desenvolvendo o jogo.<br>Tente novamente em breve'
})