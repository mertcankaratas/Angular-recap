import { CarService } from './../../services/carService/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { ActivatedRoute } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
          this.getCarsByColor(params["colorId"])
      }
      else if(params["brandId"]){
        this.getCarByBrandId(params["brandId"])
      }
      else{
        this.getCars();
      }
    })

  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data

    })
  }

  getCarByBrandId(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response=>{
      this.cars=response.data
    })
  }


}
