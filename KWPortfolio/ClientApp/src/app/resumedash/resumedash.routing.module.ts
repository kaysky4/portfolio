import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumedashComponent } from './resumedash.component';
import { EdExpComponent } from './ed-exp/ed-exp.component';
import { CertsComponent } from './certs/certs.component';
import { TechComponent } from './tech/tech.component';
import { SoftComponent } from './soft/soft.component';

const resumeroutes: Routes = [

  {
    path: 'resumedash', component: ResumedashComponent,
    children: [
      { path: '', component: EdExpComponent, outlet: 'section' },
      { path: 'ed-exp', component: EdExpComponent, outlet: 'section' },
      { path: 'certs', component: CertsComponent, outlet: 'section' },
      { path: 'tech', component: TechComponent, outlet: 'section' },
      { path: 'soft', component: SoftComponent, outlet: 'section' },
    ]
  },
];


@NgModule({
  imports: [ RouterModule.forChild( resumeroutes) ],
  exports: [ RouterModule ],
})

export class ResumedashRoutingModule { }
