import { Injectable } from '@angular/core';
import { User } from './user';
import { Ccodes } from './ccodes';

@Injectable()
export class UserService {

  user: User;
  cCode: Ccodes;
  constructor() { 
    this.user = new User('RamKumar','Erode',[9985674552,8754215778]);
    this.cCode = new Ccodes(['AUS','USD'],['EUR','INR']);
  }

}
