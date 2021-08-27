import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localstorage";


const rootReducer = combineReducers({
    counterReducer: counterReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
    saveState({
        counterReducer: store.getState().counterReducer,
    });
});
