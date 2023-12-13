import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2023_12_12_zadanieNaOcene';

  moreThanSeven: boolean = false;
  veggiesAmount: number = 0;
  onionAmount: number = 0;
  cheeseAmount: number = 0;
  baconAmount: number = 0;
  beefAmount: number = 0;

  burgerCost: number = 9.99;
  burgerCostText: string = 'Cena: 9.99 zł';

  ingredientsSum: number = 0;
  veggiesArray: string[] = [];
  onionArray: string[] = [];
  cheeseArray: string[] = [];
  baconArray: string[] = [];
  beefArray: string[] = [];



  changeIngredients() {
    this.burgerCost = 9.99;

    this.veggiesArray = [];
    this.onionArray = [];
    this.cheeseArray = [];
    this.baconArray = [];
    this.beefArray = [];

    this.ingredientsSum = this.veggiesAmount + this.onionAmount + this.cheeseAmount + this.baconAmount + this.beefAmount;
    if (this.ingredientsSum > 7) {
      this.burgerCost = 9.99;
      this.moreThanSeven = true;
    }
    else {
      this.moreThanSeven = false;
      for (let i = 0; i < this.veggiesAmount; i++) {
        this.veggiesArray.push('#');
        this.burgerCost += 0.5;
      }
  
      for (let i = 0; i < this.onionAmount; i++) {
        this.onionArray.push('#');
        this.burgerCost += 0.5;
      }
  
      for (let i = 0; i < this.cheeseAmount; i++) {
        this.cheeseArray.push('#');
        this.burgerCost += 1;
      }
  
      for (let i = 0; i < this.baconAmount; i++) {
        this.baconArray.push('#');
        this.burgerCost += 2;
      }
  
      for (let i = 0; i < this.beefAmount; i++) {
        this.beefArray.push('#');
        this.burgerCost += 3;
      }
  
    }
    
    this.burgerCostText = `Cena: ${this.burgerCost.toFixed(2)} zł`;
  }
}
