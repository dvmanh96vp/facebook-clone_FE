import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {StorageKey} from "../../../core/storageKey";

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {
  avatar = '';
  @Input() clickCmt = false;
  @Output() clickCmtChange = new EventEmitter();
  @Input() id = '';
  @ViewChild('inpCmt') inpCmt!: ElementRef
  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.avatar = JSON.parse(localStorage.getItem(StorageKey.user)).avatar;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes && changes['clickCmt'] && changes['clickCmt'].currentValue) {
      this.inpCmt.nativeElement.focus();
    }
  }

  handleFocusOut() {
    this.clickCmt = false;
    this.clickCmtChange.emit(false);
  }

}
