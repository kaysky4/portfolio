
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { WorksRoutingModule } from './works.routing.module';

import { WorksComponent } from './works.component';
import { ArtComponent } from './art/art.component';
import { CadComponent } from './cad/cad.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { PhotographyComponent } from './photography/photography.component';
import { UxComponent } from './ux/ux.component';
import { WritingsComponent } from './writings/writings.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    WorksRoutingModule,
  ],

  declarations: [
    WorksComponent,
    ArtComponent,
    CadComponent,
    GraphicsComponent,
    PhotographyComponent,
    UxComponent,
    WritingsComponent
  ],

  exports: [
    WorksComponent,
    WorksRoutingModule],
  providers: [],
  bootstrap: [WorksComponent]
})
export class WorksModule { }
