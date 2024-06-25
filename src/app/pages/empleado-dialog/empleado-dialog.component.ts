import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EmpleadoModel} from "../../models/empleado";
import {EmpresaModel} from "../../models/empresa";
import {EmpresaService} from "../../services/empresa.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-empleado-dialog',
  templateUrl: './empleado-dialog.component.html',
  styleUrls: ['./empleado-dialog.component.scss']
})
export class EmpleadoDialogComponent {
  @Input() empleado: EmpleadoModel;
  @Output() public saveEmmiter: EventEmitter<EmpleadoModel>


  public empresas: EmpresaModel[];

  constructor(private empresaService: EmpresaService,
              private modalService: NgbModal) {
    this.saveEmmiter = new EventEmitter();
    this.empleado = new EmpleadoModel();
    this.empresas = [];
    this.loadEmpresas();
  }

  onDimiss() {
    this.modalService.dismissAll('cancel click');
  }

  onClose() {
    this.modalService.dismissAll('Ok click');
  }

  private loadEmpresas() {
    this.empresaService.list().subscribe({
      next: response => this.empresas = response
    });
  }

  onSubmitEmpleado() {
    this.saveEmmiter.emit(this.empleado);
    this.onClose();
  }
}
