/* function contar() {
    var resu = 0
    while(resu <= 5) {
        document.getElementById('res').innerHTML  +=resu
        resu++
    }
} */

function contar() {
    var n1 = document.getElementById('txn1')
    var n2 = document.getElementById('txn2')
    var n3 = document.getElementById('txn3')
    var resu = document.getElementById('res')
    var ini = Number(n1.value)
    var fim = Number(n2.value)
    var salto = Number(n3.value) 
    if(ini == 0 && fim == 0) {
        window.alert('Insira o inicio e fim')
    }  else if (salto == 0) {
        window.alert('[ERRO!] salto igual 0')
    } else {
        if (ini < fim) {
            resu.innerHTML = 'CONTAGEM PROGRESSIVA<br>'
            while(ini <= fim){
                resu.innerHTML +=ini
                ini = ini + salto
            }
        } else {
            resu.innerHTML = 'CONTAGEM REGRESSIVA<br>'
            while(ini >= fim) {
                JSON(emo)
                resu.innerHTML +=ini
                ini = ini - salto
            }
        }
    }

    
}