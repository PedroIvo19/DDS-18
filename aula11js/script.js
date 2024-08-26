var alunos = ["Pedro", "Ivo", "Freitas"]
var notas = [7,8,9]

console.log(alunos[2], "=", notas[2])

var pessoa = {
    nome: "Maria",
    idade: 20
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa["idade"])


//Adicionando nova propriedade
pessoa.rg = "12345678910"
console.log(pessoa);

pessoa["profissao"] = "Diretora"
console.log(pessoa);

//Adicionando propriedade com uma variavel
/*var novaProp = "sobrenome"
pessoa[novaProp] = "Do Bairro"
console.log(pessoa.sobrenome); 
*/

//Criando metodos
/*var animal = {
    nome:"Luna",
    raca:"Bradock",
    latir: function(){
        console.log("Au Au")
    },
    andar: function(){
        console.log("Luna esta andando")
    }
}


console.log(animal.nome)
console.log(animal["raca"])
animal.latir()
animal.andar()
*/
/*
var aluno = {
    nome: "Namaskaar",
    notas: [8,9,7],
    media: function(n1, n2, n3){
        return((n1 + n2 + n3) /3)
    }
}

console.log("O nome do aluno:", aluno.nome)
console.log("Sua média foi:", aluno.media(aluno.notas[0], aluno.notas[1], aluno.notas[2]))
*/
