import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  {path: "page", component: PagesComponent, children: [
    {path: "home", component: HomeComponent},
    {path: "panel", component: PanelComponent}
  ]},
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class PagesRoutingModule { }
