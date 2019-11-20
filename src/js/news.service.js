import { HttpMethodFactory } from './http.service';
import { API_KEY, HOST_URL } from './constant';

export class NewsService {
    constructor() {
        //Proxy
        this.service = new Proxy(new HttpMethodFactory(), {
            get(target, key) {
                const propertyValue = target[key];
                if (typeof propertyValue !== 'function') {
                    return propertyValue;
                }
                return function (...args) {
                    logger(`${key}: ${JSON.stringify(args)}`);
                    return propertyValue.apply(target, args);
                };
            }
        })
    }

    async getChannels() {
        return await this.service.send(`${HOST_URL}sources`, 'get');
    }

    async getNews(channel = 'breitbart-news') {
        const URL = `${HOST_URL}articles?source=${channel}&apiKey=${API_KEY}`;
        return await this.service.send(URL, 'get');
    }
}

export function logger(message) {
    console.log(message);
}