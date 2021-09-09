//ARRAy

const arreglo = [1,2,3,4,5]
arreglo.push(66)

//romperla referencia en momento de realizar otra signacion
const arreglo2 = [ ...arreglo ];
arreglo2.push(55)


const arreglo3 = arreglo2.map( function(n){
    return n *2
})

arreglo3.push(100)

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)