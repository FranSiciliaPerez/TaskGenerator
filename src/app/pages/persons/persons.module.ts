import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PersonsPageRoutingModule } from './persons-routing.module';

import { PersonsPage } from './persons.page';
import { PeopleComponent } from './components/people/people.component';
import { PersonsDetailsComponent } from './persons-details/persons-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PersonsPage, PeopleComponent, PersonsDetailsComponent],
  exports: [PeopleComponent]
})
export class PersonsPageModule {}
