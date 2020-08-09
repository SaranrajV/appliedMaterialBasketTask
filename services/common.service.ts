import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private snackBar: MatSnackBar) { }

  showToaster(message:string): any{
    this.snackBar.open(message,'',{
      duration: 3000,
      horizontalPosition: "end",
      verticalPosition: "top",
    });
  }
}
