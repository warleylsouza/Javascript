var agora = new Date()
var diasem = agora.getDay()
/*
0=domingo
1=segunda 
2=terça
3=querta
4=quinta
5=sexta
6=sabado
*/

console.log(diasem)
switch(diasem){
    case 0:
    console.log(`Domingo`)
    break
    case 1:
    console.log(`Segunda`)
    break
    case 2:
    console.log(`Terça`)
    break
    case 3:
    console.log(`quarta`)
    break
    case 4:
    console.log(`Quinta`)
    break
    case 5:
    console.log(`Sexta`)
    break
    case 6:
    console.log(`Sabado`)
    break
    default:
        console.log(`[ERROR] Dia invalido!`)
        break
}   