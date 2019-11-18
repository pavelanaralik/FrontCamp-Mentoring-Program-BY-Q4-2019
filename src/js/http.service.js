export class HttpService {
    async get(url) {
        logger('GET', url);
        const result = fetch(url)
        const response = await result;
        return await response.json()
    }
}

export function logger(method, url){
    console.log(`${method}: url: ${url}`); 
}