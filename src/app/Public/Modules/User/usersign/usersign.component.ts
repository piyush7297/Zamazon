import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl , FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usersign',
  templateUrl: './usersign.component.html',
  styleUrls: ['./usersign.component.css']
})
export class UsersignComponent implements OnInit {
  signupForm : any;
  showpass : boolean = false;



  constructor( public fb : FormBuilder ) {
    this.signupForm = fb.group({
      userEmail : [""],
      userName : [""],
      userPhone : [""],
      userPass : [""],

    })
   }

  ngOnInit(): void {
  }
  subSignForm()
  {
    console.log(this.signupForm.value)
    alert(`You Have Successfully Registered Your Account ${this.signupForm.value.userName}`)
  }
  showpassword()
  {
    this.showpass = !this.showpass
  }


}
