import { Subject, takeUntil } from 'rxjs';
import { UserService } from '../../../../services/user.service';
import { Language, Application } from '../../../core/constant';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { StorageKey } from 'src/app/core/storageKey';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-user',
  templateUrl: './account-user.component.html',
  styleUrls: ['./account-user.component.scss'],
})
export class AccountUserComponent implements OnInit {
  multiLang = Language;
  servicesList = Application.split(',');
  loginForm!: FormGroup;
  destroy$ = new Subject();

  constructor(
    private dialog: MatDialog,
    private userSerivce: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(RegisterFormComponent);
    dialogRef.afterClosed().subscribe((res) => {
      if (res?.data) {
        this.handleCreateAccount(res.data);
      }
    });
  }

  handleCreateAccount(body: any) {
    if (body) {
      body.birthOfDate = moment(body.birthOfDate).format('DD/MM/YYYY');
      this.userSerivce
        .createUser(body)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          (res: any) => {
            localStorage.setItem(StorageKey.user, JSON.stringify(res.infor));
            localStorage.setItem(StorageKey.token, res.token);
            this.router.navigate(['home']);
          },
          (error) => {}
        );
    }
  }
  submitLogin() {
    if (this.loginForm.valid) {
      this.handleLoginServer({ ...this.loginForm.value });
    }
  }

  handleLoginServer(body: any) {
    this.userSerivce
      .login(body)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (res: any) => {
          localStorage.setItem(StorageKey.user, JSON.stringify(res.infor));
          localStorage.setItem(StorageKey.token, res.token);
          this.router.navigate(['home']);
        },
        (err) => {}
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
