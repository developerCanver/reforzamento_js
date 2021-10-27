console.log('hola mundo')


const mi_promesa =()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            //resolve es cuando la promesa se ejecuto sin errores
            //resolve('Tenmos una funcion (promesa) que retorna despues de 1 seg.')
            
            //reject se ejecuta presentado la promesa como errores 
            reject('Tenmos una funcion (promesa) que retorna despues de 1 seg.')

        }
        )
    })
}

//asignar la palabra async conbertiendo la funcion en una fincion promesa
//medirTiempoasync() == mi_promesa()

const medirTiempoasync = async() =>{
    try {
        
        console.log('inicio')

        // const res_mi_promesa =  mi_promesa()
         const res_mi_promesa = await mi_promesa()
     
         console.log(res_mi_promesa)

         console.log('fin')
         return('Tenmos un valor en la promesa y dura 1  seg.')
        } catch (error) {
            
            //throw('con esat funcion se disara como error medirTiempoasync  por el catch')
    }



}

 //mi_promesa().then( console.log)
 //como la funcion medirTiempoasync se convertio en una promesa se puede ejecutar con .then
 //si ejecuta  .then() es po que la proemsa esta bien
 //si  ejecutacatch()   es po que la proemsa esta MAL

 medirTiempoasync()
            .then( valor => console.log('THEN EXITOSO  ', valor))
            .catch( Err   => console.log('CATCH Errores ', Err))



           // las funciones await se puede utilizar para promesar y asuncronas