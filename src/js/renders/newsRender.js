function render(state) {
    if(!state.articles) 
        return;
    let news = document.getElementById('news');
        var elem = document.querySelector("article");
        if (elem)
            elem.remove();
        var fragment = document.createDocumentFragment();
        for (const item of state.articles) {
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

export {render};