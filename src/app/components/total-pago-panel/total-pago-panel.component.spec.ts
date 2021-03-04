import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPagoPanelComponent } from './total-pago-panel.component';

describe('TotalPagoPanelComponent', () => {
  let component: TotalPagoPanelComponent;
  let fixture: ComponentFixture<TotalPagoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPagoPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPagoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
