import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdListModule,
  MdGridListModule,
  MdSidenavModule,
  MdTabsModule,
  MdInputModule,
  MdSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdListModule,
    MdGridListModule,
    MdSidenavModule,
    MdTabsModule,
    MdInputModule,
    MdSelectModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdListModule,
    MdGridListModule,
    MdSidenavModule,
    MdTabsModule,
    MdInputModule,
    MdSelectModule
  ],
  declarations: []
})
export class NgMaterialModule { }
