import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { ToastService } from 'src/app/service/toast.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  log(value: any): void {
    console.log(value);
  }
  char_num_only = /^[a-zA-Z0-9]+$/;

  registrationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private toast: ToastService
  ) {}
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      title: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          //Validators.pattern(this.char_num_only),
        ]),
      ],
      task: [''],
      username: [''], 
    });
  }

  public submitTask() {
    if (this.registrationForm.valid) {
      console.log(`submited value ${this.registrationForm.value}`)
      this.api.postTask(this.registrationForm.value).subscribe((res) => {
        this.toast.showToast('success', 'Registration successful!', 'success');
        //this.toast.showToast('error', 'Registration error!', 'error');
        //this.toast.showToast('info', 'Info Message', 'info');
      });
    }else {
      this.toast.showToast('error', 'Registration error!', 'error');
    }
  }

  get usernameControl(): FormControl {
    return this.registrationForm.get('username') as FormControl;
  }

  // get passwordControl(): FormControl {
  //   return this.form.get('password') as FormControl;
  // }

  // Swal.fire({
  //   toast: true,
  //   position: 'top-end',
  //   icon: 'success',
  //   title: 'Registration successful!',
  //   showConfirmButton: false,
  //   timer: 3000,
  //   timerProgressBar: true,
  //   customClass: {
  //     popup: 'custom-toast-popup',
  //     timerProgressBar: 'custom-progress-bar',
  //   },
  // });
}
