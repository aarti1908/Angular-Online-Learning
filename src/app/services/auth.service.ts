import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {}

    SignIn(email: string, password: string) {
        return this.afAuth.signInWithEmailAndPassword(email, password).then((result) => {
            return result;
        }).catch((error) => {
            console.log(error.message)
        });
    }


    SignUp(email: string, password: string, role : string) {
        return this.afAuth
          .createUserWithEmailAndPassword(email, password)
          .then((result) => {
            if(result.user?.uid) this.saveUser(result.user?.uid, {
              name: 'Aarti',
              email : email,
              role: role
            });
            return result;
          })
          .catch((error) => {
            throw (error.message);
          });
    }

    SignOut(){
        return this.afAuth.signOut();
    }

    GetToken(): Promise<string> {
        return new Promise((resolve, reject) => {
            this.afAuth.onAuthStateChanged( user => {
                if (user) { 
                    user.getIdToken().then(token => { 
                        localStorage.setItem('token', token)
                        resolve(token);
                  });
                }
            });
        })
    }

    saveUser(id : string, userInfo : User) {
        const usersList = this.db.list('users/list');
        usersList.push(userInfo).child(id);
    }


    updateCount(){
    }

    getAuthStatus(){
        return localStorage.getItem('token') ? true : false;
    }
}