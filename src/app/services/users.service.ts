import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    constructor(private db: AngularFireDatabase) {}


    getUsers(){
        return this.db.object('users').valueChanges();
    }
}