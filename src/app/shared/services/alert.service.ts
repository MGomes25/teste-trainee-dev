// src/app/shared/services/alert.service.ts
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  success(message: string, title: string = 'Sucesso') {
    return Swal.fire({
      icon: 'success',
      title,
      text: message,
      confirmButtonColor: '#3085d6'
    });
  }

  error(message: string, title: string = 'Erro') {
    return Swal.fire({
      icon: 'error',
      title,
      text: message,
      confirmButtonColor: '#d33'
    });
  }

  confirm(message: string, title: string = 'Tem certeza?') {
    return Swal.fire({
      title,
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar'
    });
  }

  info(message: string, title: string = 'Informação') {
    return Swal.fire({
      icon: 'info',
      title,
      text: message
    });
  }
}
