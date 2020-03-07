import * as React from 'react';
import * as ReactDOM from "react-dom";
import "./styles.css";
import {createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux";
import AppContainer from "./container/AppContainer";

const store = createStore(rootReducer);

var mountNode = document.getElementById("app");
ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
, mountNode);
