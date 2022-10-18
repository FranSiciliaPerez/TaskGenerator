
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Persons } from 'src/app/models/persons.models';
import { DataPersonsService } from 'src/app/services/dataperson.service';
import { PersonsDetailsComponent } from './persons-details/persons-details.component';
@Component({
  selector: 'app-person',
  templateUrl: './persons.page.html',
  styleUrls: ['./persons.page.scss'],
})
export class PersonsPage {
  @Input() p : Persons;
  public person:Persons[];
  constructor(
    private dataPersons: DataPersonsService,
    private activatedRoute: ActivatedRoute,
    private alert:AlertController,
    private modal: ModalController,
    private personService:DataPersonsService
  ) { }
  
  ngOnInit() {
  }
  
  getPersons() {
    return this.dataPersons.getPersons();
  }
  async presentPersonForm(person:Persons){
    const modal = await this.modal.create ({
      component:PersonsDetailsComponent,
      componentProps:{
        person:person
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.personService.addPerson(result.data.person);
            break;
          case 'Edit':
            this.personService.updatePerson(result.data.person);
            break;
          default:
        }
      }
    });
  }
  
  onNewPerson(){
    this.presentPersonForm(null);
    
  }

  onEditPerson(person){
    this.presentPersonForm(person);
  }

  async onDeleteAlert(person){
    const alert = await this.alert.create({
      header: '¿Está seguro de que desear borrar a la persona?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Operacion cancelada");
          },
        },
        {
          text: 'Borrar',
          role: 'confirm',
          handler: () => {
            this.personService.deletePersonsById(person.personid);
          },
        },
      ],
    });
    await alert.present();

  }
  onDeletePerson(person){
    this.onDeleteAlert(person);
    
  }
}
