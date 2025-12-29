import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.model';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private doctors: Doctor[] =[
    {
      id:1,
      name:"Dr. Naveen kumar Gupta",
      specialization:"Eurologist",
      photo:"Doctors_Images/Naveen_kumar.jpg",
    },
    {
      id:2,
      name:"Dr. A. Pani",
      specialization:"Nephrologist",
      photo:"Doctors_Images/A_pani.jpg",
    },
    {
      id:3,
      name:"Dr. Souvik Ghatak",
      specialization:"Nephrologistt",
      photo:"Doctors_Images/doctor_img.jpg",
    },
    {
      id:4,
      name:"Dr. Soham Das Bakshi",
      specialization:"General Medicine",
      photo:"Doctors_Images/sohom_das_b.jpeg",
    },
    {
      id:5,
      name:"Dr. Ayan Midya",
      specialization:"General Medicine",
      photo:"Doctors_Images/doctor_img.jpg",
    },
    {
      id:4,
      name:"Dr. Manish Sharma",
      specialization:"Medicine",
      photo:"Doctors_Images/doctor_img.jpg",
    },
    {
      id:4,
      name:"Dr. Anukaran Saha",
      specialization:"Gynecologist & Obstetrician",
      photo:"Doctors_Images/Anukoron_saha.jpg",
    },
    {
      id:4,
      name:"Dr. Shatavisa khara",
      specialization:"Gynecologist & Obstetriciane",
      photo:"Doctors_Images/doctor_img.jpg",
    },
    {
      id:4,
      name:"Dr. Satrajit Ghoshal",
      specialization:"Neurologist & Psychiatrist",
      photo:"Doctors_Images/doctor_img.jpg",
    },
    {
      id:4,
      name:"Dr. Sukanta Chakrabortty",
      specialization:"General Surgeon",
      photo:"Doctors_Images/doctor_img.jpg",
    },
     {
      id:4,
      name:"Dr. Arijit Ghosh",
      specialization:"Neurologist Surgeon",
      photo:"Doctors_Images/doctor_img.jpg",
    },
     {
      id:4,
      name:"Dr. Shirshendu Kheto",
      specialization:"Orthopaedic Surgeon",
      photo:"Doctors_Images/doctor_img.jpg",
    },
  ];
  getDoctors():Doctor[]{
    return this.doctors;
  }
}
