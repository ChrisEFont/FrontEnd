import { Component, OnInit } from '@angular/core';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/service/cursos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: Cursos[] = [];

  constructor(private cursosS: CursosService, private tokenService: TokenService) { }
  isLogged = false;

  editOn = false;
  exId: number = 0;

  ngOnInit(): void {
    this.cargarCurso();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
        this.isLogged= false;
    }
  }
  

  cargarCurso(): void {
    this.cursosS.lista().subscribe(
      data => 
      {this.cursos = data;
      }
    )
  }

  delete(id?:number){
    if(id != undefined){
      this.cursosS.delete(id).subscribe(
        data => {
          this.cargarCurso();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

  editTogle(id?: number): void {
    this.exId=id;
    this.editOn= true;
  }


}
