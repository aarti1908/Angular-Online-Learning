import { Component,OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit{
  
  users : User[] = [];
  currentPageIndex : number = 0;
  totalRecords : number = 19; // note : check how to get total records from firebase
  itemsPerPage : number = 4;

  constructor(private db : AngularFireDatabase){}

  ngOnInit() {
    this.fetchList('First');
  }

  fetchList(type: string){
    if(type == 'First') {
      this.db.list<User>('/users/list', ref => ref.orderByChild('name')
      .limitToFirst(this.itemsPerPage)).valueChanges()
      .subscribe(data => {
        this.users = data;
        console.log(data);
      });

    } else if(type == 'Next') {

      let startAfter = this.users[1]?.name;
      if(!startAfter) return;

      this.db.list<User>('/users/list', ref => ref.orderByChild('name').startAfter(startAfter)
      .limitToFirst(this.itemsPerPage)).valueChanges()
      .subscribe(data => {
        this.users = data;
        console.log(data);
      });
    } else if(type == 'Previous') {

      let endBefore = this.users[0]?.name;
      if(!endBefore) return;

      this.db.list<User>('/users/list', ref => ref.orderByChild('name').endBefore(endBefore)
      .limitToLast(this.itemsPerPage)).valueChanges()
      .subscribe(data => {
        this.users = data;
        console.log(data);
      });
    } else {
      this.db.list<User>('/users/list', ref => ref.orderByChild('name')
      .limitToLast(this.itemsPerPage)).valueChanges()
      .subscribe(data => {
        this.users = data;
        console.log(data);
      });
    }

    
  }

  goTo(type: string){
    this.fetchList(type);
  }

  onSort(event:any){
    console.log(event?.value);
  }

  trackByFn(index :  number, item : User) {
    return index; // or item.id
  }
}
