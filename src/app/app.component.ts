import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  price: string = 'hit';

  onTest(event: any) {
    console.log(event);
  }
}
