import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PeopleComponent } from './people.component';



@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
    declarations: [PeopleComponent],
    exports: [PeopleComponent]
})
export class PeopleComponentModule { }
