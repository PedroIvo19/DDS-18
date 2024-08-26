//Calibrador de pneus

/* function calcularDiferenca() {

    const N = parseInt(prompt("Digite a pressão desejada (N):"));
    const M = parseInt(prompt("Digite a pressão lida (M):"));

    if (isNaN(N) || isNaN(M) || N < 1 || N > 40 || M < 1 || M > 40) {
        alert("insira valores válidos entre 1 e 40:");
        return;
    }


    const diferenca = N - M;

    alert(`Diferença de pressão: ${diferenca}`);
}

window.onload = calcularDiferenca;



//Calculadora de Tomadas

        function calcularTomadas(T1, T2, T3, T4) {

            let totalTomadas = T1 + T2 + T3 + T4;

            let tomadasDisponiveis = totalTomadas - 3;
            return tomadasDisponiveis;
        }

        let T1 = 4;
        let T2 = 5;
        let T3 = 6;
        let T4 = 2;

        console.log(calcularTomadas(T1, T2, T3, T4));




//Recordes Olímpicos

        function verificarRecordes(R, M, L) {

            let recordeMundial = (R < M) ? 'RM' : '*';
            let recordeOlimpico = (R < L) ? 'RO' : '*';

            console.log(recordeMundial);
            console.log(recordeOlimpico);
        }

        let R = 500;
        let M = 550;
        let L = 520;

        verificarRecordes(R, M, L);

//Transportar Caixas com Drone

        function calcularMinimoViagens(A, B, C) {
            if (A + B < C) {

                return 1;
            } else if (A + B < C || A + C < B || B + C < A) {
                return 2;
            } else {
                return 3;
            }
        }

        let A = parseInt(prompt("Digite o tamanho da caixa A:"));
        let B = parseInt(prompt("Digite o tamanho da caixa B:"));
        let C = parseInt(prompt("Digite o tamanho da caixa C:"));

        console.log(calcularMinimoViagens(A, B, C));



//Idade de Camila

        function idadeCamila(idade1, idade2, idade3) {

            let idades = [idade1, idade2, idade3];
            idades.sort((a, b) => a - b);
            return idades[1];
        }

        let idade1 = parseInt(prompt("Digite a idade da primeira irmã:"));
        let idade2 = parseInt(prompt("Digite a idade da segunda irmã:"));
        let idade3 = parseInt(prompt("Digite a idade da terceira irmã:"));

        console.log(idadeCamila(idade1, idade2, idade3));



//Piloto Automatico / Controle de Velocidade do Carro

        function decidirAcao(A, B, C) {
            let distAB = B - A;
            let distBC = C - B;
           
            if (distAB < distBC) {
                return 1;
            } else if (distAB > distBC) {
                return -1;
            } else {
                return 0;
            }
        }


        let A = parseInt(prompt("Digite a posição da traseira do carro A:"));
        let B = parseInt(prompt("Digite a posição da traseira do carro B:"));
        let C = parseInt(prompt("Digite a posição da traseira do carro C:"));

        console.log(decidirAcao(A, B, C));



//Quantos Dias para o Topo do  Muro / Dona lesma

        function calcularDias(A, S, D) {
            let dias = 0;
            let alturaAtual = 0;
           
            while (alturaAtual < A) {
                dias++;
                alturaAtual += S;
                if (alturaAtual >= A) {
                    return dias;
                }
                alturaAtual -= D;
            }
        }

        let A = parseInt(prompt("Digite a altura do muro:"));
        let S = parseInt(prompt("Digite a distância que Dona Lesma sobe a cada dia:"));
        let D = parseInt(prompt("Digite a distância que Dona Lesma escorrega a cada noite:"));

        console.log(calcularDias(A, S, D));



//Idade de dona monica

        function idadeFilhoMaisVelho(M, A, B) {
            let idadeTerceiroFilho = M - A - B;
            return Math.max(A, B, idadeTerceiroFilho);
        }

        let M = parseInt(prompt("Digite a idade de Dona Mônica:"));
        let A = parseInt(prompt("Digite a idade de um dos filhos:"));
        let B = parseInt(prompt("Digite a idade do outro filho:"));

        console.log(idadeFilhoMaisVelho(M, A, B));



 //Capacidade do Bondinho

        function verificarCapacidade(A, M) {
            let total = A + M;
            if (total <= 50) {
                return 'S';
            } else {
                return 'N';
            }
        }

        let A = parseInt(prompt("Digite o número de alunos:"));
        let M = parseInt(prompt("Digite o número de monitores:"));

        console.log(verificarCapacidade(A, M)); */