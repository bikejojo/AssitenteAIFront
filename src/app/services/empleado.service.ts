import {Injectable} from '@angular/core';
import {API_URL} from "../utils/contants";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmpresaModel} from "../models/empresa";
import {EmpleadoModel} from "../models/empleado";

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private readonly URL: string = API_URL + '/empleado';

  constructor(private http: HttpClient) {
  }

  public list = (): Observable<Array<EmpleadoModel>> =>
    this.http.get<Array<EmpleadoModel>>(this.URL + '/all')

  public save = (empleado: EmpleadoModel): Observable<EmpleadoModel> =>
    this.http.post<EmpleadoModel>(this.URL, empleado)

  public merge = (empleado: EmpleadoModel): Observable<EmpleadoModel> =>
    this.http.put<EmpleadoModel>(this.URL, empleado)
}
