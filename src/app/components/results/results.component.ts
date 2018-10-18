import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../../services/drinks.service';
import { Drink } from '../../models/drink.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  drinks: Drink[];

  constructor(private drinksService: DrinksService) { }

  ngOnInit() {
    this.getDrinks();
  }

  getDrinks () {
    this.drinksService.getDrinks().subscribe((results) => {
      this.drinks = results.results;
    });
  }
}
