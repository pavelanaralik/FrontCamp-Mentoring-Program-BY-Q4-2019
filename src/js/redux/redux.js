const createStore = (reducer) => {
    let state = {};
    let listeners = [];

    const getState = () => {
        return state
    };

    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter(l => l !== listener)
        }
    };

    const dispatch = (action) => {
        if (typeof action === 'function') {
            action(dispatch, getState);
            return;
        }
        state = reducer(state, action);
        for (const iterator of listeners) {
            iterator(state);
        }
    };

    dispatch({});

    return { getState, dispatch, subscribe };
};

const bindActionCreators = (creator, dispatch) => (...args) => {
    dispatch(creator(...args));
}

export { createStore, bindActionCreators }