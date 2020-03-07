import {connect, MapStateToProps} from "react-redux";
import App, {AppProperties} from "../component/App";
import {AppState} from "../redux/appState";

const mapStateToProps: MapStateToProps<AppState, {}, AppProperties> = state => ({
    name: state.name
});

export default connect(mapStateToProps, null)(App)