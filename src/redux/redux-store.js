import {createStore, combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import searchReducer from "./search-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    searchPage: searchReducer,
})

let store = createStore(reducers);

// window.store = store;

export default store;