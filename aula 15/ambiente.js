let num = [ 5, 8, 9, 7, 3];
num[3] = 6; // coloco o valor 6 na posição 3
num.push(2); // coloca um valor dentro da (array)
num.length; // comprimento do vetor/nãp tem paretenses é somente um atributo
num.sort(); //colocar em ordem crescente os valores do vetor


console.log(num);
console.log(`O vetor tem  ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);

let pos = num.indexOf(5)

if( pos == -1){
    console.log('O valor não foi encontrado!')
}else {
    console.log(`O valor esta na posição ${pos}`)
}