import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { Doctor } from '../../models/doctor.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctors',
  imports: [CommonModule,FormsModule],
  templateUrl: './doctors.html',
  styleUrl: './doctors.css',
})
export class Doctors implements OnInit{
  doctors:Doctor[]=[];
  filterDoctors:Doctor[]=[];
  searchText:string="";
  constructor (private DoctorService:DoctorService){}

  ngOnInit(): void {
    this.doctors = this.DoctorService.getDoctors();
    this.filterDoctors=this.doctors;
  }
  searchBySpecilization():void{
    const text = this.searchText.toLowerCase();
    if(!this.searchText){
      this.filterDoctors = this.doctors;
      return;
    }
    this.filterDoctors = this.doctors.filter(doctor =>
      doctor.specialization .toLowerCase().includes(text)
    );
   
    // this.filterDoctors = this.doctors.filter(doctor=>
    //   doctor.name.toLowerCase().includes(text)
    // );

  }
}
