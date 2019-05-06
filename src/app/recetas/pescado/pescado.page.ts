import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-pescado',
  templateUrl: './pescado.page.html',
  styleUrls: ['./pescado.page.scss'],
})
export class PescadoPage implements OnInit {

  textoBuscar = '';
  recetas: any[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getRecetasPescado()
      .subscribe( recetas => {
        console.log (recetas);
        this.recetas = recetas;
      });
  }

}