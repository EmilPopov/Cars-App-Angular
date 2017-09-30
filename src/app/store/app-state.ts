import { IUserState } from "./user/user.state";
import { ICoreState } from "./core/core.state";

export interface IAppState {
    user: IUserState;
    core: ICoreState;
}