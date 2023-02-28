import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor(private db: AngularFireDatabase) {}

    fetch(documentName: string){
        return this.db.object(documentName).valueChanges();
    }
}