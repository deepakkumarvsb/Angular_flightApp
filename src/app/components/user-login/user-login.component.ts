import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Entity/user';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user : User = new User;
  constructor(private userService:UserServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onLogin(){
    console.log(this.user);
    this.loginUser();
  }
  loginUser(){
    this.userService.loginUser(this.user).subscribe(data =>{
      console.log(data);
      this.goToSuccessLong();
    }, 
    error =>console.log(error));
  }

  goToSuccessLong(){
    this.router.navigate(['/loginSuccess']);
  }

}
