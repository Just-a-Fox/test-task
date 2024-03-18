import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordControlComponent } from './password-control.component';

describe('PasswordControlComponent', () => {
  let component: PasswordControlComponent;
  let fixture: ComponentFixture<PasswordControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
