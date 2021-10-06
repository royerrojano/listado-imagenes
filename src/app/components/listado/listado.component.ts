import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceImagenService } from 'src/app/servicios/service-imagen.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.sass']
})
export class ListadoComponent implements OnInit {
ListImage:any=[];

  constructor(private http: ServiceImagenService) { 
    
  }
  
  ngOnInit(): void {
    this.getImages();
  }
  
  getImages() {
    this.http.getImage().subscribe(data => {
    
this.ListImage=data;
    }, (error) => {
      console.log(error);

    })
    // this.taskService.getAllTasks().subscribe(data => {
    //   console.log(data);
    // },(error)=>{
    //   console.log(error);

    // });
  }
  
 
}
