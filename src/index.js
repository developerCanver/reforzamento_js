
const   apiKey='AVUXphezRhT7O3kAvxp0HqXytUW9pPPu'
//https://api.giphy.com/v1/gifs/trending?api_key=AVUXphezRhT7O3kAvxp0HqXytUW9pPPu

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        .then(  resp => resp.json())
        .then(({ data })=>{
            const { url }=data.images.original
            console.log(url)

            const img = document.createElement('img')
            img.src = url;
            document.body.append(img)


        })
        .catch( e => console.log(e))