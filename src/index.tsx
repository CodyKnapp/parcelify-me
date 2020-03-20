import * as React from 'react';
import * as ReactDOM from "react-dom";
import "./styles.css";
import {createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContainer from "./container/AppContainer";

const store = createStore(rootReducer);

const mountNode = document.getElementById("app");

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
, mountNode);
