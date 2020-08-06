import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTaskEditComponent } from './todo-task-edit.component';

describe('TodoTaskEditComponent', () => {
  let component: TodoTaskEditComponent;
  let fixture: ComponentFixture<TodoTaskEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoTaskEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTaskEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
