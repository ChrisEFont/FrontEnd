import { Component, OnInit } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];
  
  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;
  editOn=false;
  exId: number = 0;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(data => {this.expe = data;})
    }

    delete(id?: number){
      if(id != undefined){
        this.sExperiencia.delete(id).subscribe(
          datadata => {
            this.cargarExperiencia();
          }, err =>{
            alert("No se pudo eliminar la experiencia");
          }
          )
      }
    }

    editTogle(id?: number): void {
      this.exId=id;
      this.editOn= true;
    }
}

