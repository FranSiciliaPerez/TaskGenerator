import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonsPageRoutingModule } from './persons-routing.module';

import { PersonsPage } from './persons.page';
import { PeopleComponent } from './components/people/people.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonsPageRoutingModule
  ],
  declarations: [PersonsPage, PeopleComponent]
})
export class PersonsPageModule {}
