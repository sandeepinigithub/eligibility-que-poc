import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityQueComponent } from './eligibility-que.component';

describe('EligibilityQueComponent', () => {
  let component: EligibilityQueComponent;
  let fixture: ComponentFixture<EligibilityQueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EligibilityQueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligibilityQueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
