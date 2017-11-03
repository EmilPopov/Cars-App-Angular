import { IUserState } from "./user/user.state";
import { ICoreState } from "./core/core.state";
import { IStatsState } from "./stats/stats.state";
import { ICarsState } from "./cars/cars.state";

export interface IAppState {
    user: IUserState;
    core: ICoreState;
    stats: IStatsState;
    cars: ICarsState;
}