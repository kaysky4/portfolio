import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ResumedashRoutingModule } from './resumedash.routing.module';


import { ResumedashComponent } from './resumedash.component';
import { EdExpComponent } from './ed-exp/ed-exp.component';
import { CertsComponent } from './certs/certs.component';
import { TechComponent } from './tech/tech.component';
import { SoftComponent } from './soft/soft.component';


@NgModule({
  declarations: [ResumedashComponent, EdExpComponent, CertsComponent, TechComponent, SoftComponent],

  imports: [
    CommonModule,
    NgbModule,
    ResumedashRoutingModule,
  ],

  exports: [
    ResumedashComponent,
    ResumedashRoutingModule],
  providers: [],
  bootstrap: [ResumedashComponent]
})
export class ResumedashModule { }
