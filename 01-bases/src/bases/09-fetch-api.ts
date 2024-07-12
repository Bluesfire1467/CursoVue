import { GIFResponse, Data, Images } from '../interfaces/gif.response';
const apiKey = '8FeyZ8Z7cIEM6R2pLPyVlH8PUkGTtcx1';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp => resp.json())
    .then((body: GIFResponse) => console.log( body.data.images.downsized_medium.url ))
    .catch(err => console.log(err))