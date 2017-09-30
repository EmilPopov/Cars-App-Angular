import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreModule } from "../shared/core/core.module";
//components
import { RegisterComponent } from "./register/register.component";
//services
import { UserService } from "./user.service";
//redux
import { UserActions } from "../store/user/user.actions";
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  providers: [
    UserService,
    UserActions
  ],
  exports: [RegisterComponent]
})
export class UsersModule { }
