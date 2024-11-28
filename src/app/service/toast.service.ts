import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor() {}

  showToast(type: 'success' | 'error' | 'info', message: string, icon: SweetAlertIcon) {

    const bgClasses = {
      success: 'toast-success',
      error: 'toast-error',
      info: 'toast-info',
    };

    if (!bgClasses[type]) {
      throw new Error(`Invalid type '${type}'! Use 'success', 'error', or 'info'.`);
    }

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon,
      title: message,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        popup: bgClasses[type],

      },
    });
  }
}
