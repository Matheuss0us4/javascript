var agora = new Date()
var diaSema = agora.getDay()/* esse elemento coleta o dia da semana atual em numero exemplo abixo */
/* 
    0 - Domingo
    1 - Segunda
    2 - Terca
    3 - Qurta
    4 - Quinta
    5 - Sexta
    6 - sabado
*/
 
switch(diaSema) {
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Segunda")
        break;
    case 2:
        console.log("Terca")
        break;
    case 3:
        console.log("Quarta")
        break;
    case 4:
        console.log("Quinta")
        break;
    case 5:
        console.log("Sexta")
        break;
    case 6:
        console.log("Sabado")
        break;
    default:
        console.log("-ERRO- dia invalido")

}