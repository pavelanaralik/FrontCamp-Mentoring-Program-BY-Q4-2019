export class NewsView {
    constructor(service) {
        this.service = service;
        this.setChanells();
        this.setNews();

        this.service.getNews().then(list => {
            var table = document.getElementById('news').getElementsByTagName('tbody')[0];
            this.render(list, table);
        });
    }

    async setChanells() {
        try {
            this.service.getChannels().then(list => {
                this.renderChannels(list);
            })
        } catch (err) {
            await this.showError(err);
        }
    };

    renderChannels(list) {
        for (let i = 0; i < list.sources.length; i++) {
            var option = document.createElement("option");
            option.text = list.sources[i].name;
            option.value = list.sources[i].id;
            document.getElementById('channels').add(option, null);
        }
    }

    async setNews() {  
        const selectElement = document.querySelector("#channels");     
        try {
            selectElement.addEventListener('change', (event) => {               
                this.service.getNews(event.target.value).then(list => {
                    var table = document.getElementById('news').getElementsByTagName('tbody')[0];
                    for (let i = table.rows.length - 1; i >= 0; i--) {
                        table.deleteRow(i);
                    }

                    this.render(list, table);
                })
            });
        } catch (err) {
            await this.showError(err);
        }
    }

    render(list, table) {
        for (let i = 0; i < list.articles.length; i++) {
            var newRow = table.insertRow(table.rows.length);
            var title = list.articles[i].title;
            var description = list.articles[i].description;
            var publishedAt = list.articles[i].publishedAt;
            var url = list.articles[i].url;
            var urlToImage = list.articles[i].urlToImage;
            var article = { title, description, publishedAt, url, urlToImage };
            newRow.innerHTML = `<tr>
                                    <td>
                                        <div class="item-date">${new Date(article.publishedAt).toLocaleString()}</div>
                                        <header>
                                            <h1><a class="item-title" href="${article.url}">${article.title}</a></h1>
                                        </header>
                                        <div><p>${article.description ? article.description : ''}</p></div>
                                        <img src="${article.urlToImage}" alt="${article.title}">
                                    </td>
                                </tr>`;
        }
    }

    async showError(err) {
        console.log(err);
    }
}