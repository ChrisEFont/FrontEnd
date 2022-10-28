import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { CirclesComponent } from './componentes/circles/circles.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component'
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/formacion/new/neweducacion.component';
import { EditEducacionComponent } from './componentes/formacion/edit/edit-educacion.component';
import { NewskillsComponent } from './componentes/skills/newskills/newskills.component';
import { EditskillsComponent } from './componentes/skills/editskills/editskills.component';
import { NewproyectosComponent } from './componentes/proyectos/newproyectos/newproyectos.component';
import { EditproyectosComponent } from './componentes/proyectos/editproyectos/editproyectos.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { NewcursosComponent } from './componentes/cursos/newcursos/newcursos.component';
import { EditcursosComponent } from './componentes/cursos/editcursos/editcursos.component';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de/edit-acerca-de.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage'

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    ContactoComponent,
    EncabezadoComponent,
    ExperienciaComponent,
    FooterComponent,
    FormacionComponent,
    ProyectosComponent,
    SkillsComponent,
    CirclesComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditEducacionComponent,
    NewskillsComponent,
    EditskillsComponent,
    NewproyectosComponent,
    EditproyectosComponent,
    CursosComponent,
    NewcursosComponent,
    EditcursosComponent,
    EditAcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      titleFontWeight:"600"
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
