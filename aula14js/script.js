var horas = document.getElementById("horas")
var minutos = document.getElementById("minutos")
var segundos = document.getElementById("segundos")
var titleSuperior = document.getElementById('title')
var mesAno = document.getElementById('mesAno')



var diasSemana = ['Domingo', 'Segunda-Feira','Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira','Domingo']
var mesesAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']





var atualizaRelogio = setInterval(function() {
    var dataAtual = new Date()
    var horaAtual = dataAtual.getHours().toString().padStart(2, '0');
    var minutoAtual = dataAtual.getMinutes().toString().padStart(2, '0');
    var segundoAtual = dataAtual.getSeconds().toString().padStart(2, '0');
    var diaAtual = dataAtual.getDay()
    var mesAtual = dataAtual.getMonth()
    var anoAtual = dataAtual.getFullYear()



    horas.textContent = horaAtual
    minutos.textContent = minutoAtual
    segundos.textContent = segundoAtual
    titleSuperior.textContent = `${diasSemana[diaAtual]} - ${mesesAno[mesAtual]} ${anoAtual}`


    

} )



