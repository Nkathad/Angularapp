import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  template: `
  <header-component></header-component>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {

}
