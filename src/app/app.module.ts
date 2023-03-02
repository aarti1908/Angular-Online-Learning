import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../enviornments/enviornments';
import { AngularFireModule } from '@angular/fire/compat';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthGuard } from './gaurds/auth.gaurd';
import { ComponentsModule } from './components/components.module';
import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ComponentsModule,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [AuthGuard, AppService],
  bootstrap: [AppComponent], 
})
export class AppModule { }