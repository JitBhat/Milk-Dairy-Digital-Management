import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MgrDashboardComponent } from './component/manager/mgr-dashboard/mgr-dashboard.component';
import { MgrDataentryComponent } from './component/manager/mgr-dataentry/mgr-dataentry.component';
import { MgrFarmerlistComponent } from './component/manager/mgr-farmerlist/mgr-farmerlist.component';
import { MgrLoginComponent } from './component/manager/mgr-login/mgr-login.component';
import { MgrRegisterComponent } from './component/manager/mgr-register/mgr-register.component';
import { TlkLoginComponent } from './component/taluk_officer/tlk-login/tlk-login.component';
import { TlkRegisterComponent } from './component/taluk_officer/tlk-register/tlk-register.component';


const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'mgr-login',component:MgrLoginComponent},
    {path:'mgr-register',component:MgrRegisterComponent},
    {path:'tlk-login',component:TlkLoginComponent},
    {path:'tlk-register',component:TlkRegisterComponent},
    {path:'mgr-dashboard',component:MgrDashboardComponent},
    {path:'mgr-dataentry',component:MgrDataentryComponent},
    {path:'mgr-farmerlist',component:MgrFarmerlistComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
