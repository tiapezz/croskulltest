import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Desktop/home/home.component';
import { WorkComponent } from './Desktop/work/work.component';
import { DHomeGuardGuard } from './Guard/dhome-guard.guard';
import { MHomeGuardGuard } from './Guard/mhome-guard.guard';
import {MrightsGuardGuard} from './Guard/mrights-guard.guard';
import {DrightsGuardGuard} from './Guard/drights-guard.guard';
import { MHomeComponent } from './Mobile/m-home/m-home.component';
import { RightsComponent } from './Desktop/rights/rights.component';
import {MRightsComponent} from './Mobile/m-rights/m-rights.component'



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
  ,
  { 
    path: 'rights',   
    component: RightsComponent ,
    canActivate: [DrightsGuardGuard] 
  },
  { 
    path: 'm/rights',   
    component: MRightsComponent ,
    canActivate: [MrightsGuardGuard] 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
