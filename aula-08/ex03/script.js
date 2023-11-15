function contar() {
  /*   var c = 1
    while(c < 10) {
        console.log(c)
        c++
    } */
   
    
   
/* criar as variaveis de inicio, fim, e salto */
    var n1 = document.getElementById('txn1')
    var n2 = document.getElementById('txn2')
    var n3 = document.getElementById('txn3')
    var resu = document.getElementById('res')
    var ini = Number(n1.value)
    var fim =  Number(n2.value)
    if(ini == 0 && fim == 0) {
        window.alert('Incira um numero')
    } else {
        var salto = Number(n3.value) 
         /* criar um condiçao na qual se o inicio 
    for maior que o fim entao sera uma contagem 
    normal se nao sera regresiva */
        if (ini > fim) {
            resu.innerHTML = 'Regresiva'
            while(fim <= ini) {
                fim = fim + salto
                resu.innerHTML = `${fim}`
            }
        } else {
            resu.innerHTML = 'Normal'
        }
    } 
} 