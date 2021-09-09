//DESESTRUCUTURAR OBJETOS


const persona = {
    name: 'Tony',
    age: 31,
    codeName: 202,
}

//descomponer persona 
const { age, name, codeName, power='no tiene poder'} = persona


// console.log(age)
// console.log(name)

const crearHero = (persona) => {
   // const crearHero = ({age, name, codeName, power='no tiene poder'}) => {

    const {age, name, codeName, power='no tiene poder'} = persona
    return {
        id: 123,
        name,
        age,
        codeName,
        power,
    }
    //SI UNA PROÍEDAD TIENE EL MISMO CASO QUE LOS ATRIBUTOS NO ES D¿NDESESARIO DE COLOCAR            NAME:NAME, SOLO NAME,

    // return {
    //     id: 123,
    //     name: name,
    //     age: age,
    //     codeName: codeName,
    //     power: power,
    // }
}


     const crearHeroAbrebiado = ({age, name, codeName, power='no tiene poder'}) => ({ id: 123,  name,  age,    codeName,    power   })
 
 


console.log(crearHeroAbrebiado(persona))