import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCartComponent } from './no-cart.component';

describe('NoCartComponent', () => {
  let component: NoCartComponent;
  let fixture: ComponentFixture<NoCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
