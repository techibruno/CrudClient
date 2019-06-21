import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  createUserForm: FormGroup
  massage: string;
  value: any;

  constructor(private fb: FormBuilder, private _userService: UserService) { }

  ngOnInit() {
    this.createUserForm = this.fb.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onFormSubmit(){
    const user = this.createUserForm.value;    
    this.createUser(user);   
  }

  createUser(user: User){
    this._userService.createUser(user).subscribe(
      (data: any) => 
      {
        this.value = data;
        console.log(this.value);
        this.massage = data.Massage;  
        this.createUserForm.reset();    
      });
  }
}
