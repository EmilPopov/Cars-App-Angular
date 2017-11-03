import { Component, OnInit } from '@angular/core';
import { StatsModel } from "./statistics.model";
import { StatsActions } from "../store/stats/stats.actions";
import { NgReduxModule, NgRedux } from "ng2-redux";
import { IAppState } from "../store/app-state";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  stats: StatsModel;

  constructor(
    private statsActions: StatsActions,
    private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.getStats();
  }

  getStats() {
    this.statsActions.getAll();

    this.ngRedux
      .select(state => state.stats)
      .subscribe(stats => {
        this.stats = stats;
        // console.log(stats);


      });
  }

}
