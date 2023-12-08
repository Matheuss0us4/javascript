function tabuada() {
    let res = document.getElementById('res')
    let c = 0
    while(c <= 3) {
        res.innerHTML += `2 x ${c}<br> `
        c++
    }
}