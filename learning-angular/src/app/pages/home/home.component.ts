import { Component } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  messageHome = 'Home';
  userList = [
    { name: 'Alex', email: 'alex@mail.com', job: 'instructor' },
    { name: 'Joao', email: 'joao@mail.com', job: 'developer' },
  ];
}
