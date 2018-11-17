import { NurserySchoolRoutingModule} from '../nursery-school-routing/nursery-school-routing.module';
import {NurserySchoolComponent} from '../components/nursery-school/nursery-school.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



@NgModule({
  imports: [
    CommonModule,
  NurserySchoolRoutingModule

  ],
  declarations: [
    NurserySchoolComponent
  ]
})
export class NurserySchoolModule { }
