import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from "./shared/core/core.module";
import { NgReduxModule, NgRedux } from "ng2-redux";
import { IAppState, store } from "./store";

import { carRoutesModule } from "./routes.module";
import { UsersModule } from "./users/users.module";

//components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    carRoutesModule,
    CoreModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>) {
    this.ngRedux.provideStore(store);
  }
}
