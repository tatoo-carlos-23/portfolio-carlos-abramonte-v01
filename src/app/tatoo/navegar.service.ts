import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavegarService {

  constructor(private direccion: Router) { }

  ir_a(direccion_hija: string) {
    this.direccion.navigate([`/${direccion_hija}/`])
  }

}