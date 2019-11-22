import "./scss/main.scss";
import { createStore, bindActionCreators } from './js/redux/redux';
import reducer from './js/reducer';
// import * as actions from './js/actions';
import {setChanells, setNews } from './js/actions';
import * as channelsRender from './js/renders/channelsRender';
import * as newsRender from './js/renders/newsRender';
import { NewsService } from "./js/news.service";
import {handleError} from "./js/errorHandler/error.handler";

const service = new NewsService();
const store = createStore(reducer);
const { dispatch } = store;
const setChanellsDispath = bindActionCreators(setChanells, dispatch);
const setNewsDispath = bindActionCreators(setNews, dispatch);

document
    .querySelector("#channels")
    .addEventListener('change', async ({ target: { value } }) => {
        try {
            const news = await service.getNews(value);
            if(news.status == "error")
                throw new Exception(news.message);
            setNewsDispath(news);
        } catch (error) {
            handleError(error);
        }
    });

const _init = async () => {
    try {
        const channels = await service.getChannels();
        if(channels.status == "error")
            throw new Exception(channels.message);
        setChanellsDispath(channels);

        const news = await service.getNews();
        if(news.status == "error")
            throw new Exception(news.message);
        setNewsDispath(news);
    } catch (error) {
        handleError(error);
    }
}

/*render UI*/
const update = (state) => {
    channelsRender.render(state);
    newsRender.render(state);
};

_init();
store.subscribe(update);

