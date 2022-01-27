import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  public title = 'Contador';

  public contador: number = 10;
  public base: number = 5;


  public acumulador(valor:number) {
    
    this.contador += valor;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
