import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitirVariableService {

  @Output() disparador_de_variable: EventEmitter<string> = new EventEmitter();

  constructor() { }

}
