import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-pollo',
  templateUrl: './pollo.page.html',
  styleUrls: ['./pollo.page.scss'],
})
export class PolloPage implements OnInit {

  textoBuscar = '';
  recetas: any[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getRecetaPollo()
      .subscribe( recetas => {
        console.log (recetas);
        this.recetas = recetas;
      });
  }

}
