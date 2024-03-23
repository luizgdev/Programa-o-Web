function mostraMatriz(matriz) {
    matriz.forEach(element => { console.log(element) });
}

function transporMatriz(matriz) {
    console.log('Matriz original: '), mostraMatriz(a)

    let aTransposta = [[], []]

    for (let j = 0; j < matriz[0].length; j++) {
        for (let i = 0; i < matriz.length; i++) {
            aTransposta[j][i] = matriz[i][j]
        }
    }

    console.log('\nMatriz Transposta: '), mostraMatriz(aTransposta)
}

const a = [[1, 2],
           [3, 4],
           [5, 6]]

transporMatriz(a)