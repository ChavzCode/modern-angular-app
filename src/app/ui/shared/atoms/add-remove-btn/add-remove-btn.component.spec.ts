import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveBtnComponent } from './add-remove-btn.component';

describe('AddRemoveBtnComponent', () => {
  let component: AddRemoveBtnComponent;
  let fixture: ComponentFixture<AddRemoveBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRemoveBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRemoveBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
