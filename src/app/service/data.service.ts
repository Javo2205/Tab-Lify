import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor ( private http: HttpClient) {}

    getRecetasCarne(){
        return this.http.get<any[]>('/assets/data/menu.carne.json');
    }
    getRecetasPescado(){
      return this.http.get<any[]>('/assets/data/menu.pes.json');
  }
    getRecetaPollo(){
      return this.http.get<any[]>('/assets/data/menu.pollo.json');
  }
}
