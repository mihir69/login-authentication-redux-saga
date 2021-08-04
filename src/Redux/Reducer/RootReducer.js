import reducer from "./Reducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    loginReducer: reducer,
});
export default RootReducer