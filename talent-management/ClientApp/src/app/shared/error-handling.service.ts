import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Error } from '../models/errorMsg'

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  errorMessage = new Subject<Error>();

  constructor() { }

  httpErrorHandle(statusCode: number, dataType: string): void {

    let msg: string = '';

    switch(statusCode) {
      case 401:
        msg = 'You made an unauthorized request. Please log in.'
        break;
      case 404:
        msg = `The ${dataType} you requested could not be found. Are you sure you searched for the right one?`
        break;
      case 500:
        msg = 'Bad request. Please try again.'
        break;
      default:
        msg = 'Internal server error. Please try again later.'
    }
    this.errorMessage.next({
      code: statusCode,
      message: msg
    })
  }
}
