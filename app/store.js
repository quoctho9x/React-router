/**
 * Created by quoctho.nguyen on 21/4/2017.
 */
import {createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger'
import rootReducer from './redux/reducers/index';

const  logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export  function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}