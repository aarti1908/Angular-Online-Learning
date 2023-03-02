import { Component } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor(private appService: AppService){
    this.appService.pageName = 'Profile';
  }
}
