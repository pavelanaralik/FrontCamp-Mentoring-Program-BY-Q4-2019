/**
 *Factory implementation
 */
export function creator(method) {
    switch (method) {
        case 'get':
            return new HttpGet();
        case 'put':
            return new HttpPut();
        case 'post':
            return new HttpPost();
        default:
            throw new Exception(`${type} method does not exist`);

    }
}
export class HttpGet {
    async execute(url) {
        const response = await fetch(url)
        return await response.json()
    }
}

export class HttpPut {
    async execute(url) {
        const response = await fetch(url)
        return await response.json()
    }
}

export class HttpPost {
    async execute(url) {
        const response = await fetch(url)
        return await response.json()
    }
}