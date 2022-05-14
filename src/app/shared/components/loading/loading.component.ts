import { AppService } from '../../../../services/app.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<any>,
    private appStore: AppService
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.appStore.isLoading$.subscribe((res) => {
      if (!res) {
        this.onClose();
      }
    });
  }
}
