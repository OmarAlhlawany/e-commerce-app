import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName: string | null = null;
  userEmail: string | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    // Retrieve user data from local storage
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      const { username, email } = JSON.parse(user);
      this.userName = username;
      this.userEmail = email;
    } else {
      // Redirect to login page if no user is found in local storage
      this.router.navigate(['/login']);
    }
  }
}