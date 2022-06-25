// import {configureStore} from '@reduxjs/toolkit';
// import {applyMiddleware} from 'redux';
import {composeWithDevtools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducer';

// export const store = configureStore({reducer: rootReducer}, applyMiddleware(thunk))


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

