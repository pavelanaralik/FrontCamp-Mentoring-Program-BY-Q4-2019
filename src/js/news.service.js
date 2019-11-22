import { creator } from './http.service';
import { API_KEY, HOST_URL } from './constant';

export class NewsService {
    constructor() {
        //Proxy
        this.service = new Proxy(creator('get'), {
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
        return await this.service.execute(`${HOST_URL}sources`);
    }

    async getNews(channel = 'breitbart-news') {
        const URL = `${HOST_URL}articles?source=${channel}&apiKey=${API_KEY}`;
        return await this.service.execute(URL);
    }
}

export function logger(message) {
    console.log(message);
}