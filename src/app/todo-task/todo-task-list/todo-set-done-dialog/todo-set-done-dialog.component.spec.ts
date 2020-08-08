import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSetDoneDialogComponent } from './todo-set-done-dialog.component';

describe('TodoSetDoneDialogComponent', () => {
  let component: TodoSetDoneDialogComponent;
  let fixture: ComponentFixture<TodoSetDoneDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoSetDoneDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoSetDoneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
