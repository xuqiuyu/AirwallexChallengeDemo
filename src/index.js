import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import createSagaMiddleware from 'redux-saga';
import reducer from '../src/redux/reducer';
import saga from '../src/redux/saga';
import routes from './routes';


// create redux store and apply middleware
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  {},
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);
sagaMiddleware.run(saga);


ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      {
        renderRoutes(routes)
      }
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

