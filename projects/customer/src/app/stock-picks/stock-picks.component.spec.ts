import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPicksComponent } from './stock-picks.component';

describe('StockPicksComponent', () => {
  let component: StockPicksComponent;
  let fixture: ComponentFixture<StockPicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockPicksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockPicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
