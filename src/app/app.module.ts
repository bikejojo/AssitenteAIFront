import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginDialogComponent } from './pages/login-dialog/login-diaglog.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { TicketsPageComponent } from './pages/tickets-page/tickets-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TicketsDetailPageComponent } from './pages/tickets-detail-page/tickets-detail-page.component';
import { EmpleadosPageComponent } from './pages/empleados-page/empleados-page.component';
import { EmpresaPageComponent } from './pages/empresa-page/empresa-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmpresaDialogComponent } from './pages/empresa-dialog/empresa-dialog.component';
import { AgentePageComponent } from './pages/agente-page/agente-page.component';
import { AgenteDialogComponent } from './pages/agente-dialog/agente-dialog.component';
import { ProductoPageComponent } from './pages/producto-page/producto-page.component';
import { ProductoDialogComponent } from './pages/producto-dialog/producto-dialog.component';
import { SoportePageComponent } from './pages/soporte-page/soporte-page.component';
import { SoporteDialogComponent } from './pages/soporte-dialog/soporte-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    MenuComponent,
    TicketsPageComponent,
    TicketsDetailPageComponent,
    EmpleadosPageComponent,
    EmpresaPageComponent,
    EmpresaDialogComponent,
    AgentePageComponent,
    AgenteDialogComponent,
    ProductoPageComponent,
    ProductoDialogComponent,
    SoportePageComponent,
    SoporteDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
