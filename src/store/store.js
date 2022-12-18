import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import mainPageReducer from "./reducers/mainPageReducer";
import {composeWithDevTools} from "redux-devtools-extension";


const middlewares = [thunk ];
const composeEnhancers = composeWithDevTools(
    applyMiddleware(middlewares),
);

const reducers = combineReducers({
  mainPage: mainPageReducer,
})

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(...middlewares),
));

export default store
