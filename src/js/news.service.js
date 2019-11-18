import { HttpService } from './http.service';
import { API_KEY, HOST_URL } from './constant';

export class NewsService {
    constructor() {
        this.service = new HttpService();
    }

    async getChannels() {
        return await this.service.get(`${HOST_URL}sources`);
    }

    async getNews(channel = 'breitbart-news') {
        const URL = `${HOST_URL}articles?source=${channel}&apiKey=${API_KEY}`;
        return await this.service.get(URL);
    }
}