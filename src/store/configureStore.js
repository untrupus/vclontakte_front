import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {createBrowserHistory} from "history";
import userReducer from "./reducers/userReducer";
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunkMiddleware from "redux-thunk";
import {loadFromLocalStorage, saveToLocalStorage} from "./localStorage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: userReducer,
  router: connectRouter(history)
});

const middleware = [
  thunkMiddleware,
  routerMiddleware(history)
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
  saveToLocalStorage({
    user: {
      user: store.getState().user.user
    }
  });
});

export default store;