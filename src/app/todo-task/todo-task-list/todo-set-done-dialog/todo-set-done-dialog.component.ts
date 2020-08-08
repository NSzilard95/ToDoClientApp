import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todo-set-done-dialog',
  templateUrl: './todo-set-done-dialog.component.html',
  styleUrls: ['./todo-set-done-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoSetDoneDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
