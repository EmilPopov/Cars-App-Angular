import { Injectable } from "@angular/core";
import { NgRedux } from "ng2-redux";
import { IAppState } from '..'
import { StatsService } from "../../stats/stats.service";


export const GET_STATS = 'stats/GET_STATS';

@Injectable()
export class StatsActions {
    constructor(
        private statsService: StatsService,
        private ngRedux: NgRedux<IAppState>) { }

    getAll() {
        this.statsService
            .getStats()
            .subscribe(result => {
                this.ngRedux.dispatch({
                    type: GET_STATS,
                    result
                })
            }
            )
    }

}
