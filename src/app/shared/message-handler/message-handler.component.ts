import { Component, OnInit } from '@angular/core';

import { NgReduxModule, NgRedux } from "ng2-redux";
import { IAppState, store } from "../../store";

@Component({
  selector: 'message-handler',
  templateUrl: './message-handler.component.html',
  styleUrls: ['./message-handler.component.css']
})
export class MessageHandlerComponent implements OnInit {

  message: string;

  constructor(
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
    this.ngRedux.select(state => state.core.message)
      .subscribe(message => this.message = message)


  }

}
