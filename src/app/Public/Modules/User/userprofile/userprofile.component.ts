import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl , FormGroup } from '@angular/forms';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  loginForm : any;
  showpass : boolean = false;




  constructor( public fb : FormBuilder ) {
      this.loginForm = fb.group({
        userEmail : [""],
        userPass : [""],
      })
   }

  ngOnInit(): void {
  }
  subloginForm()
  {
    console.log(this.loginForm.value)
    alert(`You are Successfully LogIn  ${this.loginForm.value.userEmail}`)
  }
  showpassword()
  {
    this.showpass = !this.showpass;
  }
}
