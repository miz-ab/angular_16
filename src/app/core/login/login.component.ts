import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder){

  }
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      title: [''],
      task: [''],
    });
  }

  public submitTask(){
    console.log(`entered data ${this.registrationForm.value.title}`)
  }

}
