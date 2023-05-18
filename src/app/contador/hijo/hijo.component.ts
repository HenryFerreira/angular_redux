import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})
export class HijoComponent implements OnInit{
  @Input() contador!: number;
  @Output() cambioContador = new EventEmitter<number>();

  constructor(){
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  multiplicar(){
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }
  
  dividir(){
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }
  
  resetNieto( evento: number ){
    this.contador = evento
    this.cambioContador.emit(this.contador);
  }

}
