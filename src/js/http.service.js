/**
 *Factory implementation
 */
export class HttpMethodFactory {
    async send(url, type, body) {
        let response;
        switch (type) {
            case 'get':
                response = await this.get(url);
                break;
            case 'put':
                response = await this.put(url, body);
                break;
            case 'post':
                response = await this.post(url, body);
                break;
            default:
                console.log(`${type} method does not exist`); 
                break;
        }
        return response;
    }

    async get(url) {
        logger('GET', url);
        const response = await fetch(url)
        return await response.json()
    }

    async put(url, body) {
        logger('PUT', url);
        const response = fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return await response.json()
    }

    async post(url, body) {
        logger('POST', url);
        const response = fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return await response.json()
    }
}

export function logger(method, url){
    console.log(`${method}: url: ${url}`); 
}