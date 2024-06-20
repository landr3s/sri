import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.obtenerDatos().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
}
