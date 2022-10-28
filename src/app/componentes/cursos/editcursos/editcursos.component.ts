import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/service/cursos.service';
import { CursosComponent } from '../cursos.component';

@Component({
  selector: 'app-editcursos',
  templateUrl: './editcursos.component.html',
  styleUrls: ['./editcursos.component.css']
})
export class EditcursosComponent implements OnInit {
  cursos: Cursos = null;

  constructor(private cursosS: CursosService, private activatedRouter: ActivatedRoute,
    private router: Router, private Cursos: CursosComponent) { }

    ngOnInit(): void {
      const id = this.Cursos.exId;
      this.cursosS.details(id).subscribe(
        data => {
          this.cursos=data;
        }, err => {("Error al modificar la el Curso/Certificacion");}
      )
  
  }
  
  onUpdate(): void {
    const id = this.Cursos.exId;
    this.cursosS.update(id, this.cursos).subscribe(
      data => {
        this.Cursos.cargarCurso();
      }, err => {alert("Error al modificar el Curso/Certificacion");}
    )
  
    this.Cursos.editOn = false;
  }



}
