import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { SkillsComponent } from '../skills.component';

@Component({
  selector: 'app-newskills',
  templateUrl: './newskills.component.html',
  styleUrls: ['./newskills.component.css']
})
export class NewskillsComponent implements OnInit {
  nombreSk: string;
  descripcionSk: number;

  constructor(private skillsS: SkillsService, private router: Router, private Skills: SkillsComponent) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skills = new Skills(this.nombreSk, this.descripcionSk);
    this.skillsS.save(skills).subscribe(
      data =>{
        this.Skills.cargarSkills();
        //alert("Educacion agregada");
        //this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
    this.Skills.ngOnInit();
  }

}
