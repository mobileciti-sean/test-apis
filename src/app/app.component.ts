import { Component } from '@angular/core';
import {Order} from './order';
import {ConfigService} from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  orders: Order[];

  constructor(private configService: ConfigService){};

  ngOnInit() {
    this.getOrders();
  };

  getOrders(): void {
    this.configService.getConfig().subscribe(orders => this.orders = orders);
  }  
};

