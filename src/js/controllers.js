import { NewsView } from './views';
import { NewsModel } from './models';

export async function newsController() {
    var newsModel = new NewsModel();
    var newsView = new NewsView(newsModel);

    await newsView.setChanells();
};

