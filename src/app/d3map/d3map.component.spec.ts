import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3mapComponent } from './d3map.component';

describe('D3mapComponent', () => {
  let component: D3mapComponent;
  let fixture: ComponentFixture<D3mapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3mapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3mapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
