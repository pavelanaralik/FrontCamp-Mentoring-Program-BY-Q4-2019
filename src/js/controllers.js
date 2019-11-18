import { NewsView } from './views';
import { NewsService } from './news.service';

export function NewsController() {
    var newsService = new NewsService();
    new NewsView(newsService);
};