import {connect, MapStateToProps} from "react-redux";
import {App, AppProperties} from "../component/App";
import {AppState} from "../redux/appState";

const mapStateToProps: MapStateToProps<AppProperties, {}, AppState> = (state: AppState) => ({
    name: state.name
});

export default connect(mapStateToProps, null)(App)