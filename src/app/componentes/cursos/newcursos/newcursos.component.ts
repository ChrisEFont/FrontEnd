import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/service/cursos.service';
import { CursosComponent } from '../cursos.component';

@Component({
  selector: 'app-newcursos',
  templateUrl: './newcursos.component.html',
  styleUrls: ['./newcursos.component.css']
})
export class NewcursosComponent implements OnInit {
  nombreCu: string;
  descripcionCu: string;

  constructor(private cursosS: CursosService, private router: Router, private Cursos: CursosComponent) { }
  ngOnInit(): void {
  }

  onCreate(): void {
    const curso = new Cursos(this.nombreCu, this.descripcionCu);
    this.cursosS.save(curso).subscribe(
      data =>{
        this.Cursos.cargarCurso();
        //alert("Educacion agregada");
        //this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
    this.Cursos.ngOnInit();
  }

}
