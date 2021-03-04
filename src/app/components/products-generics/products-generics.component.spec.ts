import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsGenericsComponent } from './products-generics.component';

describe('ProductsGenericsComponent', () => {
  let component: ProductsGenericsComponent;
  let fixture: ComponentFixture<ProductsGenericsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsGenericsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsGenericsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
