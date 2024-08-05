import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  // username: string = "";
  // password: string = "";
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    // Handle login logic
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.mockSignIn(email, password)
        .then(() => {
          this.router.navigate(['/profile']); 
        })
        .catch((error) => {
          console.error('Error signing in:', error);
        });
    } else {
      console.log('Form is invalid');
    }
  }

  private mockSignIn(email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: { email: string; password: string; }) => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        resolve();
      } else {
        reject('Invalid credentials');
      }
    });
  }
}
