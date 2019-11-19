import { handleError } from './handleError.js'

export class NewsView {
    constructor(model) {
        this.model = model;
        const selectElement = document.querySelector("#channels");
        selectElement.addEventListener('change', async ({target: {value}}) => {
            try {
                const list = await this.model.getNews(value);
                this.render(list); 

            } catch (err) {
                this.showError(err);
            }
        });
    }

    async setChanells() {
        try {
            const list = await this.model.getChannels();
            this.renderChannels(list);
        } catch (err) {
            this.showError(err);
        }
    };

    renderChannels(list) {
        for (const item of list.sources) {
            var option = document.createElement("option");
            option.text = item.name;
            option.value = item.id;
            document.getElementById('channels').add(option, null);
        }
    }

    //  async setNews() {
    //     const selectElement = document.querySelector("#channels");
    //     selectElement.addEventListener('change', async ({target: {value}}) => {
    //         try {
    //             const list = await this.model.getNews(value);
    //             this.render(list); 

    //         } catch (err) {
    //             this.showError(err);
    //         }
    //     });
    // }

    render(list) {
        let news = document.getElementById('news');
        var elem = document.querySelector("article");
        if (elem)
            elem.remove();
        var fragment = document.createDocumentFragment();
        for (const item of list.articles) {
            let element = document.createElement('article');
            element.className = 'item';
            if (!item.urlToImage) {
                item.urlToImage = `./src/img/news.png`;
            }

            let title = item.title;
            let description = item.description;
            let publishedAt = item.publishedAt;
            let url = item.url;
            let urlToImage = item.urlToImage;
            let article = { title, description, publishedAt, url, urlToImage };

            element.innerHTML = 
            `<div class="item-date">${new Date(article.publishedAt).toLocaleString()}</div>
                <header>
                    <h1><a class="item-title" href="${article.url}">${article.title}</a></h1>
                </header>
            <div><p>${article.description ? article.description : ''}</p></div>
            <img src="${article.urlToImage}" alt="${article.title}">`;
            fragment.appendChild(element);
        }
        news.appendChild(fragment)
    }

    showError(err) {
        console.log(err);
        handleError(err);
    }
}