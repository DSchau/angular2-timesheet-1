import { NgModule } from '@angular/core';

import { MdButtonModule, MdToolbarModule } from '@angular/material';

import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    RouterModule,
    MdButtonModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [NavigationComponent]
})
export class NavigationModule { }
