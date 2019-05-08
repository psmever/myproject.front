import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import { logger } from 'redux-logger';
import RootReducers from './RootReducers'
import RootSaga from './RootSaga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// let dev = true;
let dev = false;

export default function configureStore() {
    const initialState = typeof window === 'undefined' ? undefined : window.__REDUX_STATE__;
    const sagaMiddleware = createSagaMiddleware()

    let store;
    if(dev === false) {
        store = createStore(RootReducers, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)))
    } else {
        store = createStore(RootReducers, initialState, composeEnhancers(applyMiddleware(sagaMiddleware,logger)))
    }


    store.runSaga = sagaMiddleware.run(RootSaga);
    store.close = () => store.dispatch(END)
    return store
}
