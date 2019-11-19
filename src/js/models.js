import { HttpMethodFactory } from './http.service';
import { API_KEY, HOST_URL } from './constant';

export class NewsModel {
    constructor() {
        this.service = new HttpMethodFactory();
    }

    async getChannels() {
        return await this.service.send(`${HOST_URL}sources`, 'get');
    }

    async getNews(channel = 'breitbart-news') {
        const URL = `${HOST_URL}articles?source=${channel}&apiKey=${API_KEY}`;
        return await this.service.send(URL, 'get');
    }
}