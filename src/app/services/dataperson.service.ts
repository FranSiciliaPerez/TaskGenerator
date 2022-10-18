import { Injectable } from '@angular/core';
import { Persons} from '../models/persons.models';

@Injectable({
  providedIn: 'root'
})
export class DataPersonsService {
  persons:Persons[] = [
    {
      personid: 0,
      name: 'Irene',
      nickname:  'Irenilla',
      surname:'Perez'
    },
    {
      personid: 1,
      name: 'Francisco',
      nickname: 'Franck',
      surname: 'Siclia'
    },
    {
      personid: 2,
      name: 'Irene',
      nickname:  'Irenilla',
      surname:'Ortega'
    }
  ]
  personid:number = this.persons.length+1;
  constructor() { }

  getPersons(){
    return this.persons;
  }
  
  getPersonsById(personid:number){
    return this.persons.find(p=>p.personid==personid);
  }

  deletePersonsById(personid:number){
    this.persons = this.persons.filter(p=>p.personid != personid); 
  }
  addPerson(person:Persons){
    person.personid = this.personid++;
    this.persons.push(person);
  }

  updatePerson(person:Persons){
    var _person = this.persons.find(p=>p.personid==person.personid);
    if(_person){
      _person.name = person.name;
      _person.nickname = person.nickname;
      _person.surname = person.surname;
      //_person.image = person.image;
    }
  }
}

