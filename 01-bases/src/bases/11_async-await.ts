import {giphyApi} from "./10_axios.ts";
import type {GIFResponse} from "../interfaces/gif.response.ts";

export const getImage = async () => {
    try {
        // await esperar el retorno de una funcion asincrona
        const resp = await giphyApi.get<GIFResponse>('/random')
        return resp.data.data.images.downsized_large.url;
    } catch (err) {
        throw 'url no encontrado'
    }
}

// export const getImagePromise = () => {
//     return new Promise( resolve => {
//         resolve('url')
//     } );
// }

getImage()
    .then( url => console.log({ url }) )
    .catch( error => console.log(error) )