import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { environment } from 'src/enviornments/enviornments';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  // let db : AngularFireDatabase;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatListModule,
        MatIconModule,
        MatDividerModule,
        MatSelectModule,
        MatButtonModule,
      ],
      providers : [
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
      ],
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardComponent);
    // db = TestBed.inject(AngularFireDatabase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
