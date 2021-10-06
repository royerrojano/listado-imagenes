import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceImagenService } from 'src/app/servicios/service-imagen.service';

@Component({
  selector: 'app-imagen-unica',
  templateUrl: './imagen-unica.component.html',
  styleUrls: ['./imagen-unica.component.sass']
})
export class ImagenUnicaComponent implements OnInit {
  id:string | null;
  Mostrarimg:any=[];
  constructor(private aRouter:ActivatedRoute,private http:ServiceImagenService) {
    this.id=this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
  }

 



}
