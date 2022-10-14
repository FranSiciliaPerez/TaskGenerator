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
      nickname:  'Irenilla'
    },
    {
      personid: 1,
      name: 'Francisco',
      nickname:  'Franck'
    },
    {
      personid: 2,
      name: 'Irene',
      nickname:  'Irenilla'
    }
  ]
  constructor() { }

  public getPersons(): Persons[]{
    return this.persons;
  }
  
  public getPersonsById(personid:number): Persons{
    return this.persons[personid];
  }
}

