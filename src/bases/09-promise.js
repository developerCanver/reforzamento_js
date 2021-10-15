import { getHeroId} from './bases/08-imp-exp-buscar'


//las promesas son de js
// resolve si todo sale bien
//resolve retorna en el .then

// reject = para retotnar un error
// reject retorna en el .catch

console.log('inicio')

new Promise((resolve,reject) => {

 
    //resolve('promesa resulta') //ejecuta msg .then
    //reject('error de promesa') //ejecuta msg .catch

    // resolve y  reject
})
.then(msg => console.log(msg))
.catch(err => console.log(err))

console.log('fin')

const getHeroByIDAsync = (id) => {
    return new Promise ( (resolve, reject)=>{
        setTimeout( () =>{
            const hero = getHeroId(id)
            if (hero) {
                resolve(hero)
                
            } else {

                reject('HERUE  NO EXISTE')
                
            }

        }, 1000);
    } ) 
}
getHeroByIDAsync(3)
.then(h => console.log(`El herue es: ${h.name}`))
.catch(err => console.log(err))