import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTaskFormComponent } from './test-task-form.component';

describe('TestTaskFormComponent', () => {
  let component: TestTaskFormComponent;
  let fixture: ComponentFixture<TestTaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestTaskFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
