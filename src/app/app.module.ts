import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { EventoComponent } from './components/evento/evento.component';
import { DatosComponent } from './components/datos/datos.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { CierreComponent } from './components/cierre/cierre.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    EventoComponent,
    DatosComponent,
    AsistenciaComponent,
    CierreComponent,
    ReporteComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
     LoginComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
