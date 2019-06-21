import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateUserForm: FormGroup
  massage: string;
  value: any;
  userId: any;

  constructor(
    private fb: FormBuilder, 
    private _userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.userId = this.route.snapshot.paramMap.get('id');

    this.updateUserForm = this.fb.group({
      Id: [''],
      UserName: ['', Validators.required],
      Name: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['']
    });

    this._userService.getUserById(+this.userId).subscribe( 
      (data: any) => 
      {
        console.log(data.User[0]);
        this.updateUserForm.setValue(data.User[0]);
      });
  }


  onFormSubmit(){
    const user = this.updateUserForm.value;    
    this.updateUser(user);   
  }

  updateUser(user: User){
    this._userService.updateUser(user).subscribe(
      (data: any) => 
      {
        this.value = data;
        console.log(this.value);
        this.massage = data.Massage;
        this.updateUserForm.reset();    
      });
  }

}
