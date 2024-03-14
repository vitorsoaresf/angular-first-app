import { Component } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  messageHome = 'Home';
  userA = { name: 'Alex', email: 'alex@mail.com', job: 'instructor' };
  userB = { name: 'Joao', email: 'joao@mail.com', job: 'developer' };
}
