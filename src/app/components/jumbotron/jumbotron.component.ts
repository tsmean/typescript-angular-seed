import { Component, OnInit } from '@angular/core';
import {NotifyService} from 'notify-angular2';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  constructor(
      private notifyService: NotifyService
  ) { }

  ngOnInit() {
  }

  doStart() {
    this.notifyService.success('Create an account to see app in action!');
  }

}
