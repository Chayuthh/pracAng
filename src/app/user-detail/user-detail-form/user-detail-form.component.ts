import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDetail } from 'src/app/shared/user-detail.model';
import { UserDetailService } from 'src/app/shared/user-detail.service';

@Component({
  selector: 'app-user-detail-form',
  templateUrl: './user-detail-form.component.html',
  styleUrls: ['./user-detail-form.component.css'],
})
export class UserDetailFormComponent implements OnInit {
  constructor(public service: UserDetailService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0) {
      this.new(form);
    } else {
      this.update(form);
    }
  }

  new(form: NgForm) {
    this.service.postData().subscribe(
      (res) => {
        this.resetForm(form);
        this.service.gerDataList();
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  update(form: NgForm) {}

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new UserDetail();
  }
}
