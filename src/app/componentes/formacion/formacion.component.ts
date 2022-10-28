import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  educacion: Educacion[] = [];

  constructor(private educacionS: EducacionService, private tokenService: TokenService) { }
  isLogged = false;

  editOn = false;
  exId: number = 0;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
        this.isLogged= false;
    }
  }
  

  cargarEducacion(): void {
    this.educacionS.lista().subscribe(
      data => 
      {this.educacion = data;
      }
    )
  }

  delete(id?:number){
    if(id != undefined){
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se puedo eliminar");
        }
      )
    }
  }

  editTogle(id?: number): void {
    this.exId=id;
    this.editOn= true;
  }

}
