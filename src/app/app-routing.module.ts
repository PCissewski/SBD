import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstProjectComponent } from './first-project/first-project.component';
import { SecondProjectComponent } from './second-project/second-project.component';

const routes: Routes = [
  { path: 'first-project', component: FirstProjectComponent },
  { path: 'second-project', component: SecondProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
