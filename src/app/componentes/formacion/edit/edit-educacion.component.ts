import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { FormacionComponent } from '../formacion.component';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = null; //viene del model

  constructor(private EducacionS: EducacionService, private activatedRouter: ActivatedRoute,
    private router: Router, private Educacion: FormacionComponent) { }

  ngOnInit(): void {
    const id = this.Educacion.exId;
    this.EducacionS.details(id).subscribe(
      data => {
        this.educacion=data;
      }, err => {("Error al modificar la educación");}
    )

}

onUpdate(): void {
  const id = this.Educacion.exId;
  this.EducacionS.update(id, this.educacion).subscribe(
    data => {
      this.Educacion.cargarEducacion();
    }, err => {alert("Error al modificar la educacion");}
  )

  this.Educacion.editOn = false;
}
}
