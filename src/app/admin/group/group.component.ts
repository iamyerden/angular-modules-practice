import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {GroupService} from '../../service/group.service';
import {Group} from '../../model/group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groups: Group[];

  constructor(private userService: UserService,
              private groupService: GroupService) { }

  ngOnInit(): void {
    this.getAllGroups();
  }

  getAllGroups(): void {
    this.groupService.getAllGroups().subscribe(res => {
      this.groups = res;
    });
  }
}
