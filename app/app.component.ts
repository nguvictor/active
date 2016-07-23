import { Component } from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import { User } from './user';
import { UsersListComponent } from './users-list.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/public/display.html',
    styleUrls: ['app/public/css/styles.css'],
    directives: [UsersListComponent]
})
export class AppComponent {
    title = 'Active Users';
    //users = USERS;
}
