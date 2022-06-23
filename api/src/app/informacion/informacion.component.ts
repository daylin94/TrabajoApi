import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  chisterecibido:any={}
  constructor(private variableser:ServicioService) {
   variableser.obtenerChisteRandom().subscribe((data)=>{

    this.chisterecibido=data
   })
   }
   obtenerChisteNuevo(){
    this.variableser.obtenerChisteRandom().subscribe((data)=>{

      this.chisterecibido=data
     })
   }

  ngOnInit(): void {
  }

}
