import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { SkillsComponent } from '../skills.component';

@Component({
  selector: 'app-editskills',
  templateUrl: './editskills.component.html',
  styleUrls: ['./editskills.component.css']
})
export class EditskillsComponent implements OnInit {
skills: Skills = null;
  constructor(private SkillsS: SkillsService, private activatedRouter: ActivatedRoute,
    private router: Router, private Skills: SkillsComponent) { }

  ngOnInit(): void {
    const id = this.Skills.exId;
    this.SkillsS.details(id).subscribe(
      data => {
        this.skills=data;
      }, err => {("Error al modificar la habilidad");}
    )
  }

  onUpdate(): void {
    const id = this.Skills.exId;
    this.SkillsS.update(id, this.skills).subscribe(
      data => {
        this.Skills.cargarSkills();
      }, err => {alert("Error al modificar la habilidad");}
    )
  
    this.Skills.editOn = false;
  }

}
