import { Component,OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { User } from '../models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit{
  users : User[] = [];


  constructor(private db : AngularFireDatabase){}

  ngOnInit() {
    this.db.list<User>('users').valueChanges().subscribe(data => {
      this.users = data;
    });
  }

  onSort(event:any){
    console.log(event)
  }

  trackByFn(index :  number, item : User) {
    return index; // or item.id
  }
}
