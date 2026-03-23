import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';

import { clientReducer } from './reducers/clientReducer';
import { productReducer } from './reducers/productReducer';
import { shoppingCartReducer } from './reducers/shoppingCartReducer';

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer
});

// Middleware'leri bağlıyoruz (Thunk asenkron işlemler için, Logger ise state değişimlerini console'da görmek için)
export const store = createStore(rootReducer, applyMiddleware(thunk, logger));