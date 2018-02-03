import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import { offline } from '@redux-offline/redux-offline';
import customOfflineConfig from '../offline/redux-offline-config';
import rootReducer from "../reducers";

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = compose(applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
),offline(customOfflineConfig))(createStore);

const configureStore = function (initialState: Object = {}): Function {
    console.log("DATA:",initialState);
    return createStoreWithMiddleware(rootReducer, initialState);
};

export default configureStore;