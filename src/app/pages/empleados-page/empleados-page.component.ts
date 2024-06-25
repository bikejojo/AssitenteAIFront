import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {EmpleadoModel} from 'src/app/models/empleado';
import {EmpresaService} from "../../services/empresa.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EmpleadoService} from "../../services/empleado.service";
import {AgenteDialogComponent} from "../agente-dialog/agente-dialog.component";
import {AgenteModel} from "../../models/agente";
import {EmpleadoDialogComponent} from "../empleado-dialog/empleado-dialog.component";

@Component({
  selector: 'page-empleados',
  templateUrl: './empleados-page.component.html',
  styleUrls: ['./empleados-page.component.scss']
})
export class EmpleadosPageComponent implements OnInit, AfterViewInit {
  public empleados: Array<EmpleadoModel>;

  constructor(private empleadoService: EmpleadoService,
              private changeDetectorService: ChangeDetectorRef,
              private modalService: NgbModal) {
    this.empleados = [];
  }

  ngAfterViewInit(): void {
    this.changeDetectorService.detectChanges();
  }

  ngOnInit(): void {
    this.loadEmpleados();
  }

  onClickShowDialogEmpleado() {
    const modalRef = this.modalService.open(EmpleadoDialogComponent, {
      centered: true
    });
    modalRef.componentInstance.agente = new EmpleadoModel();
    modalRef.componentInstance.saveEmmiter.subscribe((action: EmpleadoModel) => {
      this.saveEmpleado(action);
    });
  }

  private loadEmpleados() {
    this.empleadoService.list().subscribe({
      next: (response: EmpleadoModel[]) => {
        this.empleados = response;
      }
    })
  }

  private saveEmpleado(empleado: EmpleadoModel) {
    this.empleadoService.save(empleado).subscribe({
      next: (response: EmpleadoModel) => {
        this.loadEmpleados();
      }
    });
  }

  private mergeEmpleado(empleado: EmpleadoModel) {
    this.empleadoService.merge(empleado).subscribe({
      next: (response: EmpleadoModel) => {
        this.loadEmpleados();
      }
    });
  }

  onClickShowDialogEmpleadoUpdate(empleado: EmpleadoModel) {
    const modalRef = this.modalService.open(EmpleadoDialogComponent, {
      centered: true
    });
    modalRef.componentInstance.agente = empleado;
    modalRef.componentInstance.saveEmmiter.subscribe((action: EmpleadoModel) => {
      this.mergeEmpleado(action);
    });
  }
}
