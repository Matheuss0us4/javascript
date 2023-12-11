function tabuada() {
    /* criar as variaveis */
    let res = document.getElementById('res')
    let tabu = document.getElementById('tabu')
    if(tabu.value.length == 0) {
        window.alert('insira um numero!')
    } else {
        let t = Number(tabu.value)
        let r = 1
        for(let t = tab;tab <= 10; tab++) {
            res.innerHTML += tab
        }
    } 
    
    /* criar uma condiçao na qual se o input do numero da tabuada for 0 ou nada entao 'INSERIR UM NUMERO!'*/

    /* proseguir a condiçao com o else, converter o inpute tabuada para numero */
    
    while(c <= 10) {
        r = c * t
        res.innerHTML += `${c} x ${t} = ${r}<br>`
        c++
    }
}