import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { AuthService } from '../services/auth.service';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [HeaderComponent, FooterComponent],
  providers:[AuthService]
})
export class ComponentsModule { }
