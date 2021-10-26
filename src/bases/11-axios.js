import axios from "axios";

const   apiKey='AVUXphezRhT7O3kAvxp0HqXytUW9pPPu'
//crear una instancia 
const giphApi = axios.create({
    baseURL:'https://api.giphy.com/v1/gifs',
    params:{
         api_key:apiKey 
    }
})

giphApi.get('/random')
.then(resp =>{
    const { data } =resp.data
    const { url } =data.images.original
    console.log(url)

    const img = document.createElement('img')
    img.src = url;
    document.body.append(img)
})