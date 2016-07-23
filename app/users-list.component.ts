import { Component, Input } from '@angular/core';
import { User } from './user';

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
    selector: 'users-list',
    template: `
    <p>Hello from Users-list</p>
    <li *ngFor="let user of users" [class.selected]="hero === selectedHero" (click)="onSelect(hero)"> <span class="badge">{{user.id}}</span> {{user.name}} </li>
    `
})

export class UsersListComponent {
    @Input()
    users: USERS;
}
