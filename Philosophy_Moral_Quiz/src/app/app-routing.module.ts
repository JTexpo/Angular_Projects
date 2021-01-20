import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoteComponent } from './vote/vote.component';
import { StatsComponent } from './stats/stats.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'vote', component: VoteComponent},
  { path: 'stats', component: StatsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin/:ID', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
