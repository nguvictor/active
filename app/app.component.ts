import { Component } from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
export class Hero {
  id: number;
  name: string;
}
const USERS: Users[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
@Component({
    selector: 'my-app',
    templateUrl: 'app/public/display.html',
    styleUrls: ['app/public/css/styles.css']
})
export class AppComponent {
    title = 'Active Users';
    users = USERS;
}
