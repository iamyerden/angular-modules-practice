import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user';
import {GroupService} from '../../service/group.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService,
              private groupService: GroupService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(res => {
      this.users = res;

      this.setGroupToUser();
    });
  }

  setGroupToUser(): void {
    for (const user of this.users) {
      this.groupService.getGroupById(user.groupId).subscribe(res => {
        user.group = res;
      });
    }
  }
}
