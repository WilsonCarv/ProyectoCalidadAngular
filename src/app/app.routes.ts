import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent} from './components/login/login.component';
import { AsistenciaComponent} from './components/asistencia/asistencia.component';
import { CierreComponent} from './components/cierre/cierre.component';
import { DatosComponent} from './components/datos/datos.component';
import { EventoComponent} from './components/evento/evento.component';
import { ReporteComponent} from './components/reporte/reporte.component';
import { UsuarioComponent} from './components/usuario/usuario.component';
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component:  LoginComponent },
  { path: 'asistencia', component:  AsistenciaComponent },
  { path: 'cierre', component:  CierreComponent },
  { path: 'datos', component:  DatosComponent },
  { path: 'evento', component:  EventoComponent },
  { path: 'reporte', component:  ReporteComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
