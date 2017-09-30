import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { NgMaterialModule } from "./ng-material.module";
// components
import { NavbarComponent } from '../navbar/navbar.component';
// services
import { HttpService } from "./http.service";
import { MessageHandlerComponent } from '../message-handler/message-handler.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    NgMaterialModule
  ],
  providers: [HttpService],
  declarations: [NavbarComponent, MessageHandlerComponent],
  exports: [
    NgMaterialModule,
    NavbarComponent,
    MessageHandlerComponent
  ]

})
export class CoreModule { }
