import { Rental } from './../../models/rental';
import { RentalService } from './../../services/rentalService/rental.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent implements OnInit {
  rentals:Rental[]=[];
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals(){
      this.rentalService.getRentals().subscribe(response=>{
        this.rentals=response.data
      })
  }

}
