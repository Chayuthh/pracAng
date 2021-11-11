import { Component, OnInit } from '@angular/core';
import { UserDetailService } from '../shared/user-detail.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  constructor(public service: UserDetailService) {}

  ngOnInit(): void {
    this.service.gerDataList();
  }
}
