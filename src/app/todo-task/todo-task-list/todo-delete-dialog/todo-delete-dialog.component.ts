import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todo-delete-dialog',
  templateUrl: './todo-delete-dialog.component.html',
  styleUrls: ['./todo-delete-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoDeleteDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
