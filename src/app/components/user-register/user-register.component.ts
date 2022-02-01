import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Entity/user';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  user : User = new User;
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.registerUser(this.user).subscribe(data =>{
      console.log(data)
    }, 
    error =>console.log(error));
  }
  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

}
