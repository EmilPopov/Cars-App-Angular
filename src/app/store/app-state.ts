import { IUserState } from "./user/user.state";
import { ICoreState } from "./core/core.state";
import { IStatsState } from "./stats/stats.state";

export interface IAppState {
    user: IUserState;
    core: ICoreState;
    stats: IStatsState;
}