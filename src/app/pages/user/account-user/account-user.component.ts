import { Subject, takeUntil } from 'rxjs';
import { UserService } from '../../../../services/user.service';
import { Language, Application } from '../../../core/constant';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  visible = false;
  presentDate = new Date();
  registerForm!: FormGroup;
  isSubmit = false;

  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initFormLogin();
    this.initFormRegister();
  }

  initFormLogin(): void {
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

  initFormRegister(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      birthOfDate: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
    });
  }

  openRegisterDialog(): void {
    this.visible = true;
  }

  handleCreateAccount(body: any) {
    this.visible = false;
    if (body) {
      body.birthOfDate = moment(body.birthOfDate).format('DD/MM/YYYY');
      this.userService
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
    this.userService
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




  onClose(): void {
    this.visible = false;
    this.isSubmit = false;
  }


  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
