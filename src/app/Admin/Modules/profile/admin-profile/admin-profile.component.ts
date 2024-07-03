import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  name: any = 'Gaj Singh';
  email: any = 'gajsinghrj19@gmail.com';
  phone: any = 9938364783;
  companyName: any = 'Jodhana'
  address: any = 'Ummed palace , Circuit house , Jodhpur '
  password: any = '#gajsingh1947'
  hide = true;
  constructor(private fb: FormBuilder) {
    this.publicForm()
  }

  public profileform: FormGroup = new FormGroup({})
  ngOnInit(): void {
  }


  publicForm() {
    this.profileform = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      companyName: ["", [Validators.required]],
      address: ["", [Validators.required]],
      password: ["", [Validators.required]],
    })
  }
  get Name() {
    return this.profileform.get('name')
  }
  get Email() {
    return this.profileform.get('email')
  }
}
