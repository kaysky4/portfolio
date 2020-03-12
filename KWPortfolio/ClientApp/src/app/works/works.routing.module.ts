import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorksComponent } from './works.component';
import { ArtComponent } from './art/art.component';
import { CadComponent } from './cad/cad.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { PhotographyComponent } from './photography/photography.component';
import { UxComponent } from './ux/ux.component';
import { WritingsComponent } from './writings/writings.component';

const worksroutes: Routes = [

  {
    path: 'works', component: WorksComponent,
    children: [
      { path: '', component: UxComponent, outlet: 'samples' },
      { path: 'art', component: ArtComponent, outlet: 'samples' },
      { path: 'cad', component: CadComponent, outlet: 'samples' },
      { path: 'graphics', component: GraphicsComponent, outlet: 'samples' },
      { path: 'photos', component: PhotographyComponent, outlet: 'samples' },
      { path: 'ux', component: UxComponent, outlet: 'samples' },
      { path: 'writings', component: WritingsComponent, outlet: 'samples' },
    ]
  },
];


@NgModule({
  imports: [ RouterModule.forChild( worksroutes) ],
  exports: [ RouterModule ],
})

export class WorksRoutingModule { }
