import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../app/user-profile';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})

export class UserProfileComponent {
  user: User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  showAge: boolean = true; 

  toggleAgeVisibility() {
    this.showAge = !this.showAge;
  }

}
