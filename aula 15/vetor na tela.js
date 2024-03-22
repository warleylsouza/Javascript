let valores = [8 , 4, 3, 5, 7, 1, 9]
valores.sort() // ordenar valores

//console.log(valores[0])

/*for (let pos=0; pos < valores.length; pos++){
    console.log(`A posição  ${pos} tem o valor ${valores[pos]}`)
}*/

//Comando simplificado
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}