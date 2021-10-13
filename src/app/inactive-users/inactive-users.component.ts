import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../services/usersService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  constructor(private userService: UsersService) {
  }
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  users: string[] = this.userService.inactiveUsers

  onSetTo(id: number) {
    this.userService.onSetToActive(id)
  }
}
