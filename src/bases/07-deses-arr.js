const characters =['goku','Vegeta','Tronks']

const g = characters[0]
const v = characters[1]
const t = characters[2]

console.log(g, v, t)

//Destrucuturar Array

const [,vegeta,] = characters
console.log(vegeta)


const [go,ve,tr] = characters
console.log(go,ve,tr)


const returnArray = () =>{
    return ['ABC' , 123]
}

const returnArray2 = (arr) =>{
    return [arr[0] , arr[1]]
}



const pair = returnArray()

console.log(pair[0], pair[1])


const [ letter, numbers] = returnArray()
console.log(letter, numbers)



const [ lett, num] = returnArray2(['xyz',123])

console.log(lett, num)