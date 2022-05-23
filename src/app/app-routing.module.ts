import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstProjectComponent } from './first-project/first-project.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SecondProjectComponent } from './second-project/second-project.component';

const routes: Routes = [
  { path: 'first-project', component: FirstProjectComponent },
  { path: 'second-project', component: SecondProjectComponent },
  { path: 'home', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
