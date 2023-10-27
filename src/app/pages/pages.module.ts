import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';



@NgModule({
  declarations: [
    HomeComponent, PagesComponent, PanelComponent
  ],
  imports: [
    CommonModule,
    SharedModule, 
    RouterModule
  ]
})
export class PagesModule { }
