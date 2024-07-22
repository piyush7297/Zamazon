import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  hide = true;

  constructor(private router: Router , private snackbar : MatSnackBar) { }
  ngOnInit() {
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
      this.snackbar.open('Logged in successfully', '', {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
     this.router.navigate(["/admin"]);
    }else {
      this.snackbar.open('invalid username or password', '', {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    }
  }
}
