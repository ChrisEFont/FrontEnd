import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { ProyectosComponent } from '../proyectos.component';

@Component({
  selector: 'app-editproyectos',
  templateUrl: './editproyectos.component.html',
  styleUrls: ['./editproyectos.component.css']
})
export class EditproyectosComponent implements OnInit {
  proyectos: Proyectos = null;

  constructor(private ProyectosS: ProyectosService, private activatedRouter: ActivatedRoute,
    private router: Router, private Proyectos: ProyectosComponent) { }

  ngOnInit(): void {
    const id = this.Proyectos.exId;
    this.ProyectosS.details(id).subscribe(
      data => {
        this.proyectos=data;
      }, err => {("Error al modificar la educación");}
    )
  
  }

  onUpdate(): void {
    const id = this.Proyectos.exId;
    this.ProyectosS.update(id, this.proyectos).subscribe(
      data => {
        this.Proyectos.cargarProyectos();
      }, err => {alert("Error al modificar la educacion");}
    )
  
    this.Proyectos.editOn = false;
  }

}
