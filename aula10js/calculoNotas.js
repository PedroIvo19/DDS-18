var alunos = ["Pedro", "Ivo", "Freitas"]

var notaA = [8.0, 7.0, 7.6]
var notaB = [9.0, 6.0, 5.6]


function media(nota1, nota2) {
    var n1 = nota1
    var n2 = nota2
    var media = (n1 + n2) / 2

    return media
}


function situacao(media){
    if(media => 7){
        return "Aprovado"
    }
    else if (media < 7 && media >=5){
        return "Recuperação"
    }
    else{
        return "Reprovado"
    }
}


function mostrarResultados() {

    for(var index in alunos){
        var notaPri = notaA[index]
        var notaSeg = notaB[index]
        var mediaAtual = media(notaPri, notaSeg)
        var final = situacao(mediaAtual)
     
        console.log("O aluno", alunos[index], "teve média de", mediaAtual, ".E sua situacao final é:", final)

    }
}


mostrarResultados()