import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from "./shared/core/core.module";
import { NgReduxModule, NgRedux } from "ng2-redux";
import { IAppState, store } from "./store";

import { appRoutesModule } from "./routes.module";
import { UsersModule } from "./users/users.module";
import { CarsModule } from "./cars/cars.module";
import { StatsModule } from "./stats/stats.module";
//components
import { AppComponent } from './app.component';
// services
import { AuthService } from "./shared/core/auth.service";
import { config } from "./shared/core/config";




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    appRoutesModule,
    BrowserModule,
    NgReduxModule,
    CoreModule,
    UsersModule,
    CarsModule,
    StatsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private authService: AuthService
  ) {
    this.ngRedux.provideStore(store);

    config(this.ngRedux, this.authService);


  }
}
