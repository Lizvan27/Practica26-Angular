import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  mostrar:any=[];

  constructor(private data:DataService){

  }

  ngOnInit(): void {
    this.data.getAll().subscribe(data => this.mostrar = data)
  }

}
