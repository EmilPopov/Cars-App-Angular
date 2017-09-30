import { combineReducers } from "redux";
import { IAppState } from "./app-state";
import { UserReducer } from "./user/user.reducer";
import { CoreReducer } from "./core/core.reducer";

export const reducer = combineReducers<IAppState>({
    user: UserReducer,
    core: CoreReducer
})

