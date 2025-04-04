import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EligibilityQueComponent } from './eligibility-que/eligibility-que.component';

const routes: Routes = [
  {
    path: "eligibility-que",
    component: EligibilityQueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
