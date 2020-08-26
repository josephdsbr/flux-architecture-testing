import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPanelInfoComponent } from './product-panel-info.component';

describe('ProductPanelInfoComponent', () => {
  let component: ProductPanelInfoComponent;
  let fixture: ComponentFixture<ProductPanelInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPanelInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPanelInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
