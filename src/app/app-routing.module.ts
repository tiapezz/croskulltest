import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Desktop/home/home.component';
import { WorkComponent } from './Desktop/work/work.component';
import { DHomeGuardGuard } from './Guard/dhome-guard.guard';
import { MHomeGuardGuard } from './Guard/mhome-guard.guard';
import { MHomeComponent } from './Mobile/m-home/m-home.component';



const routes: Routes = [
  { 
    path: '',   
    component: HomeComponent ,
    canActivate: [DHomeGuardGuard] 
  },
  { 
    path: 'm',   
    component: MHomeComponent ,
    canActivate: [MHomeGuardGuard] 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
