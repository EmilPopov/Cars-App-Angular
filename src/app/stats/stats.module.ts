import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from "./stats.component";
import { StatsService } from "./stats.service";
import { StatsActions } from "../store/stats/stats.actions";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StatsComponent],
  providers: [StatsService, StatsActions]
})
export class StatsModule { }
