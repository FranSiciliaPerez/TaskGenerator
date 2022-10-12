import { Injectable } from '@angular/core';
import { Persons} from '../models/persons.models';

@Injectable({
  providedIn: 'root'
})
export class DataPersonService {
  persons:Persons[] = [
    {
      personid: 0,
      name: 'Jose Antonio',
      nickname:  'Hijo mayor',
    },
    {
      personid: 1,
      name: 'Jose Antonio',
      nickname:  'Hijo mayor',
    },
    {
      personid: 2,
      name: 'Jose Antonio',
      nickname:  'Hijo mayor',
    }
  ]
  snapshot: any;
  constructor() { }

  public getPersons(): Persons[]{
    return this.persons;
  }
  
  public getPersonsById(personid:number): Persons{
    return this.persons[personid];
  }
}

