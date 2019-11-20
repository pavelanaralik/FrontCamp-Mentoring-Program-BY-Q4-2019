import { GETS_NEWS, GETS_CHENELLS } from "./constant";

export const setChanells = (payload) => ({ type: GETS_CHENELLS, payload });

export const setNews = (payload) => ({ type: GETS_NEWS, payload });
