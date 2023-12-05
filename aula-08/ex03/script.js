function contar() {
    let ini = document.getElementById('txt1')
    let fim = document.getElementById('txt2')
    let passo = document.getElementById('txt3')
    let res = document.getElementById('res')

    if(ini.value.length == 0  || fim.value.length == 0  || passo.value.length == 0) {
        window.alert('ERRO! faltam dados.')
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = i;c <= f; c+= p) {
             res.innerHTML += `${c} {1F603}`  
        }
    }
}