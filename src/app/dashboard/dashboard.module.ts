import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  {
    path : '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
