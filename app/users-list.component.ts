import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'users-list',
    template: `
    <p>Hello from Users-list</p>
    <li *ngFor="let user of users" [class.selected]="hero === selectedHero" (click)="onSelect(hero)"> <span class="badge">{{user.id}}</span> {{user.name}} </li>
    `,
    providers: [UserService]
})

export class UsersListComponent implements OnInit{
    users: User[];

    constructor(private userService: UserService) { }

    getUsers() {
        this.userService.getUsers().then(users => this.users = users);
    }

    ngOnInit() {
        this.getUsers();
    }
}
