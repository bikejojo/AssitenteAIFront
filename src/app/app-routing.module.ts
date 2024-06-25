import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TicketsPageComponent} from './pages/tickets-page/tickets-page.component';
import {TicketsDetailPageComponent} from './pages/tickets-detail-page/tickets-detail-page.component';
import {EmpresaPageComponent} from './pages/empresa-page/empresa-page.component';
import {AgentePageComponent} from "./pages/agente-page/agente-page.component";
import {ProductoPageComponent} from "./pages/producto-page/producto-page.component";
import {SoportePageComponent} from "./pages/soporte-page/soporte-page.component";
import { LoginDialogComponent} from "./pages/login-dialog/login-diaglog.component";

const routes: Routes = [
  { path: 'login', component: LoginDialogComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'home', component: TicketsPageComponent },
  {
    path: 'tickets',
    children: [
      {path: '', component: TicketsPageComponent},
      {path: ':ticket_id', component: TicketsDetailPageComponent}
    ]
  },
  {path: 'empresas', component: EmpresaPageComponent},
  {path: 'agente', component: AgentePageComponent},
  {path: 'producto', component: ProductoPageComponent},
  {path: 'soporte', component: SoportePageComponent}
  /* {
    path: 'internal',
    canActivate: [],
    children: [
      { path: 'result', component: ResultComponent },
      { path: 'institution', component: InstitutionComponent },
      { path: 'admin', component: MenuAdministrationComponent },
      { path: 'admin-history', component: AdmHistoryComponent },
      { path: 'admin-profile', component: AdmProfileComponent },
      { path: 'admin-report', component: AdmEvolutionaryReportComponent },
    ]
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
