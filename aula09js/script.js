/*alert("asdasdasdsa")*/

console.log("raios de zuluzes")


/*
var texto = "Taylor Swift"
var numero = 1989 
var theBest = true
var nulo = null
var indefinido 


console.log(typeof(texto))
console.log(typeof(texto))
console.log(typeof(numero))
console.log(typeof(theBest))
console.log(typeof(nulo))
console.log(typeof(indefinido))
*/


//Operadores
//Aritméticos

var a = 10
var b = 4

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)


//Lógico: && = e , || = ou !
var verdade = true
var mentira = false

console.log(verdade && mentira)
console.log(verdade || mentira)
console.log(verdade && !mentira)


/*
//Relacionais: >, <, >=, <=, !=, ==, ===, !==
var a = 10
var b = 5
var c = "10"

console.log("Relacionais")

console.log(a > b)
console.log(a < b)
console.log(a <= b)
console.log(a >= b)
console.log(a == b)
console.log(a != b)
console.log(a !== c) /* importante valor é o mesmo porem tipo diferente */ 
//console.log(a === c) /* importante comparando um com outro*/   


//Condicionais
//if else 

var estaVivo 

if(estaVivo == true){
    console.log("Está vivo");
}

else if(!estaVivo){
    console.log("Está morto");
}

else {
    console.log("NAO"); 
}


//Switch

/*var camisa = 'Preta'

switch(camisa){
    case 'Azul':
    console.log("A camisa é azul")
    break
    
    case 'Amarelo':
    console.log("A camisa é preta")
}
*/


//Loops for
/*for(var i = 0; i < 5; i++){
    console.log("Estou aqui", i);
}
    console.log("Acabou o FOR");

//While
var it = 1

while(it < 10){
    console.log("Aviao");

    it++
}*/

//função
/*function teste1(){
    console.log('Função')
}

function teste2(){
    console.log('Função 2')
}

teste2()
*/

//Intereção com o usuario via prompt

var numero1 = prompt("Digite  o primeiro numero")

var numero2 = prompt("Digite o segundo numero")

var resultado = Number(numero1) + Number(numero2)

console.log(resultado)
alert(resultado)

