import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Persons } from 'src/app/models/persons.models';

@Component({
  selector: 'app-persons-details',
  templateUrl: './persons-details.component.html',
  styleUrls: ['./persons-details.component.scss'],
})
export class PersonsDetailsComponent implements OnInit {

  form:FormGroup;
  mode:"New" | "Edit" = "New";
  @Input('person') set person(person:Persons){
    if(person){
      this.form.controls.personid.setValue(person.personid);
      this.form.controls.name.setValue(person.name);
      this.form.controls.nickname.setValue(person.nickname);
      this.form.controls.surname.setValue(person.surname);
      this.form.controls.picture.setValue(person.image);
      this.mode = "Edit";
    }
  }
  

  constructor(
    private fb:FormBuilder,
    private modal:ModalController  ) { 
    this.form = this.fb.group({
      personid:[null],
      name:['', [Validators.required]],
      nickname:['', [Validators.required]],
      surname:['', [Validators.required]]
      //picture:['']
    });
  }

  ngOnInit() {

  }

  onSubmit(){
    this.modal.dismiss({person: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(){
    this.modal.dismiss(null, 'cancel');
  }

}
