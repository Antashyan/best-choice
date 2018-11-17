import {NurserySchoolComponent} from '../components/nursery-school/nursery-school.component';
import {RouterModule, Routes} from  '@angular/router';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



const routes: Routes = [
  {
    path: '',
    component: NurserySchoolComponent
  }
];

@NgModule({
  imports: [
  RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class NurserySchoolRoutingModule { }
