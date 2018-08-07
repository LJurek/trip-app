import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasComponent } from './purchas.component';

describe('PurchasComponent', () => {
  let component: PurchasComponent;
  let fixture: ComponentFixture<PurchasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
