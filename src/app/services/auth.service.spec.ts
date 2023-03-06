import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AuthService } from './auth.service';
import { environment } from 'src/enviornments/enviornments';
import { AngularFireDatabase } from '@angular/fire/compat/database';

describe('AuthService', () => {
  let service: AuthService;
  let afAuth: AngularFireAuth;
  let db: AngularFireDatabase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : [
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
        // { provide: AngularFireAuth, useValue: jasmine.createSpyObj('AngularFireAuth') }

      ]
    });
    service = TestBed.inject(AuthService);
    afAuth = TestBed.inject(AngularFireAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#SignIn should signing existing user', () => {
      const data = {
        email : 'aarti1@gmail.com',
        password : '123456'
      }

      service.SignIn(data.email, data.password).then(data => {
        expect(data).toBeTruthy();
      })
  })

  it('#Generate should return a string token value', () => {
    service.GetToken().then(token => {
      expect(token).toEqual(jasmine.any(String));
    })
  })
});
