// File: src/app/app.component.ts
// קומפוננטת השורש (root) של האפליקציה. מציגה את ה-router-outlet לניתובים.
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Pizza Store';
}
