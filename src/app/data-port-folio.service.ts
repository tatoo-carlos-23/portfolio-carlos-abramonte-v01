import { Injectable } from '@angular/core';
import { data } from './data';
import { intContacto, intEducacion, intHabilidades, intMenu } from './interfaces/app.interface';

@Injectable({
  providedIn: 'root'
})
export class DataPortFolioService {
  constructor() {}

  getOnData(value: number):any {
    switch (value) {
      case 1:
        //menu
        const menu: intMenu[] = data.menu
        return menu

      case 2:
        //educacion
        const educacion: intEducacion[] = data.educacion
        return educacion

      case 3:
        //habilidades
        const habilidades: intHabilidades[] = data.habilidades
        return habilidades

      case 4:
        //contacto
        const contacto: intContacto[] = data.contacto
        return contacto


      default:
        return false;
    }
  }
}
