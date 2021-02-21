import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Main2Component } from './main2/main2.component';
import { MainComponent } from './main/main.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/Encoder', pathMatch: 'full' },
  { path: 'Encoder', component: MainComponent },
  { path: 'Decoder', component: Main2Component },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
