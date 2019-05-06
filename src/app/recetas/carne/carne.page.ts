import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../service/data.service';


@Component({
  selector: 'app-carne',
  templateUrl: './carne.page.html',
  styleUrls: ['./carne.page.scss'],
})
export class CarnePage implements OnInit {

  textoBuscar = '';
  recetas: any[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getRecetasCarne()
      .subscribe( recetas => {
        console.log (recetas);
        this.recetas = recetas;
      });
  }

  buscar( event ){
    //console.log(event);
    this.textoBuscar = event.detail.value;
  }

}



