import { configureStore} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import rootReducer from '../reducers'

const isDev = process.env.NODE_ENV === 'development'

const createStore = () => {

    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            if(isDev) {
                return getDefaultMiddleware().concat(logger)
            }
        },
        devTools: isDev,
    })
    return store;
}

const wrapper = createWrapper(createStore, {
    debug: isDev,
})

export default wrapper