import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService){

  }
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      title: [''],
      task: [''],
    });
  }

  public submitTask(){
    this.api.postTask(this.registrationForm.value).subscribe(res => {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Registration successful!',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        customClass: {
          popup: 'custom-toast-popup',
          timerProgressBar: 'custom-progress-bar',
        },
      });
    })
  }

}
