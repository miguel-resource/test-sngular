import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquationRoutingModule } from './equation-routing.module';
import { RouterModule } from '@angular/router';

/* components */
import { MainComponent } from './pages/main/main.component';
import { EquationsComponent } from './components/equations/equations.component';
import { FormComponent } from './components/form/form.component';
import { LabelResultComponent } from './components/label-result/label-result.component';

@NgModule({
  declarations: [
    MainComponent,
    EquationsComponent,
    FormComponent,
    LabelResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EquationRoutingModule
  ]
})
export class EquationModule { }
