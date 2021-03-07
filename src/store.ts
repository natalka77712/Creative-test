import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {flatReducer} from "./components/Flat/flat-reducer";

const rootReducer = combineReducers({
    flats: flatReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

// чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
