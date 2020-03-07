import {AppState} from "./appState";
import {Action} from "redux";

const defaultState: AppState = {
    name: "Cody"
};

export const rootReducer = (state = defaultState, action: Action) => {
    return state;
};