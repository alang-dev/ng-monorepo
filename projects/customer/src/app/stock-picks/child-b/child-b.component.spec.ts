import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBComponent } from './child-b.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('ChildBComponent', () => {
  let component: ChildBComponent;
  let fixture: ComponentFixture<ChildBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildBComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
