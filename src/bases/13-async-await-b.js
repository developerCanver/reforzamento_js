import { giphApi } from './bases/11-axios'


const getImage = async () =>{

    try {
        //const { data } = await giphApi.get('/random')
        const { data } = (await giphApi.get('/random')).data
        const { url } = data.images.original
      //console.log(data)
      console.log(url)
      const img = document.createElement('img')
           img.src = url;
           document.body.append(img)
        
    } catch (error) {
        console.log('Error  en la peticion', error)
        throw error
        
    }
}

getImage()