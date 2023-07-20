var idade = 21
console.log(`Voçe tem ${idade} anos`)
if (idade < 16) {
    console.log('Nao vota!')
} else if (idade < 18 || idade > 70){
    console.log('Voto opicional')
} else {
    console.log('Voto Obrigatorio!')
}
