import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';
import { AcercaDeComponent } from '../acerca-de.component';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {

  persona: Persona = null;

  constructor(private personaS: PersonaService, private activatedRouter: ActivatedRoute,
    private router: Router, private Persona: AcercaDeComponent, public imageService: ImageService) { }
  ngOnInit(): void {
    // const id = this.activatedRouter.snapshot.params['id'];
    const id = this.Persona.exId;
    this.personaS.details(id).subscribe(
      data => {
        this.persona=data;
      }, err => {("Error al modificar características");}
    )

}

onUpdate(): void {
  // const id = this.activatedRouter.snapshot.params['id'];
  this.persona.img = this.imageService.url
  const id = this.Persona.exId;
  this.personaS.update(id, this.persona).subscribe(
    data => {
      this.Persona.cargarPersona();
    }, err => {alert("Error al modificar características");}
  )
  
  // this.persona.img = this.imageService.url
  // this.Persona.cargarPersona;
  this.Persona.editOn = false;
}

uploadImage($event:any){
  // const id = this.activatedRouter.snapshot.params['id'];
  const id = this.Persona.exId;
  const name = "perfil_"+ id;
  this.imageService.uploadImage($event, name)
}



}
