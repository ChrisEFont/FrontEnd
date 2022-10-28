import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { ExperienciaComponent } from '../experiencia.component';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;

  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute,
     private router: Router, private Experiencia: ExperienciaComponent ) { }


  ngOnInit(): void {
    //const id = this.activatedRouter.snapshot.params['id'];
    const id = this.Experiencia.exId;
    this.sExperiencia.detail(id).subscribe(
      data=>{
        this.expLab=data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
    }

  onUpdate(): void {
    //const id = this.activatedRouter.snapshot.params['id'];
    const id = this.Experiencia.exId;
    this.sExperiencia.update(id, this.expLab).subscribe(
    data =>
      {//this.router.navigate(['']);
      this.Experiencia.cargarExperiencia();
    }, err =>{
       alert("Error al modificar experiencia");
       this.router.navigate(['']);
    }
  )
  //this.Experiencia.cargarExperiencia();
  this.Experiencia.editOn = false;  
}
}
