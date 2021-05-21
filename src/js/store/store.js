import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./root";

const loggerMiddleware = createLogger();

export default preloadedState => {
    return createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        preloadedState,
        applyMiddleware(
            loggerMiddleware,
        )
    );
};