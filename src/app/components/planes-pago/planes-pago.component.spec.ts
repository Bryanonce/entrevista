import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesPagoComponent } from './planes-pago.component';

describe('PlanesPagoComponent', () => {
  let component: PlanesPagoComponent;
  let fixture: ComponentFixture<PlanesPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanesPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanesPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
