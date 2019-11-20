import { GETS_NEWS, GETS_CHENELLS, SHOW_ERROR } from "./constant";

let initialState = {
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case GETS_CHENELLS:
            return Object.assign({}, state, action.payload);
    
        case GETS_NEWS:
            return Object.assign({}, state, action.payload);

        default:
            return state;
    }
  };

  export default reducer;
