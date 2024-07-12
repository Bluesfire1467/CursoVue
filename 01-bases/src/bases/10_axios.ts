import axios from 'axios';
import {GIFResponse} from "../interfaces/gif.response.ts";

const apiKey = '8FeyZ8Z7cIEM6R2pLPyVlH8PUkGTtcx1';

export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params : {
        api_key: apiKey,
    }
});

// export default giphyApi
//
// giphyApi.get<GIFResponse>('/random')
//     .then(resp => console.log(resp.data.data.images.downsized_large.url))
//     .catch(err => console.log(err))