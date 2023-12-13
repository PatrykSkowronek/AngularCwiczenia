import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EgzaminComponent } from './egzamin/egzamin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, EgzaminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstProjectAgain';

  firstName: string = '';
  lastName: string = '';
  age: number = 0;
  acceptance: boolean = false;
  personalData: string = '';
  isError: boolean = false;

  verify() {
    if (this.acceptance) {
      this.personalData = `${this.firstName} ${this.lastName} Wiek: ${this.age}`;
      this.isError = false;
    }
    else {
      this.personalData = '';
      this.isError = true;
    }
  }
}
