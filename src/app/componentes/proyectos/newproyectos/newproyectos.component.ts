import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { ProyectosComponent } from '../proyectos.component';

@Component({
  selector: 'app-newproyectos',
  templateUrl: './newproyectos.component.html',
  styleUrls: ['./newproyectos.component.css']
})
export class NewproyectosComponent implements OnInit {
  nombrePro: string;
  descripcionPro: string;

  constructor(private proyectosS: ProyectosService, private router: Router, private Proyectos: ProyectosComponent) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyectos = new Proyectos(this.nombrePro, this.descripcionPro);
    this.proyectosS.save(proyectos).subscribe(
      data =>{
        this.Proyectos.cargarProyectos();
        //alert("Educacion agregada");
        //this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
    this.Proyectos.ngOnInit();
  }

}
