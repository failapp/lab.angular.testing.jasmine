import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CounterComponent } from './components/counter/counter.component';

//const routes: Routes = [];
const routes: Routes = [
  {
    path: 'counter', component: CounterComponent
  },
  {
    path: '**', redirectTo: 'counter'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
