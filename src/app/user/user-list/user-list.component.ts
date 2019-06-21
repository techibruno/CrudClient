import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data: any) =>
      {
        this.userList = data.Users;
        console.log(data.Users);
      });
  }

  addUser(): void {
    this.router.navigate(['create-user1']);
  };

  updateUser(user: any): void {
    this.router.navigate(['update/' + user.id]);
  };


  deleteUser(user: User): void {
    // this.apiService.deleteUser(user.id)
    //   .subscribe( data => {
    //     this.users = this.users.filter(u => u !== user);
    //   })
  };

}
