import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTaskCreateComponent } from './todo-task-create.component';

describe('TodoTaskCreateComponent', () => {
  let component: TodoTaskCreateComponent;
  let fixture: ComponentFixture<TodoTaskCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoTaskCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTaskCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
