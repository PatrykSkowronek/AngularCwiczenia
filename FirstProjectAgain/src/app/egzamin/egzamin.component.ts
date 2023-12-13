import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-egzamin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './egzamin.component.html',
  styleUrl: './egzamin.component.css'
})
export class EgzaminComponent {
  kursy: string[] = [
    'Programowanie C#',
    'Programowanie JavaScript',
    'Programowanie Python'
  ];

  dane: string = '';
  numer: number = 0;

  zapisz() {
    let n = this.numer - 1;
    if (n >= 0 && n < this.kursy.length)
      console.log(`${this.dane} kurs ${this.kursy[n]}`);
    else 
      console.error('Nieprawidłowy number kursu ' + n);
  }
}
