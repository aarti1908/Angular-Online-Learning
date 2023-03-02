import { Component, OnInit } from '@angular/core';
import { concatAll, map, mergeAll, Observable, Subject, switchAll } from 'rxjs';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor(private appService: AppService) {}
}
