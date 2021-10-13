import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../services/usersService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  constructor(private userService: UsersService) { }
  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  users: string[] = this.userService.activeUsers

  onSetTo(id: number) {
    this.userService.onSetToInactive(id)
  }
}
