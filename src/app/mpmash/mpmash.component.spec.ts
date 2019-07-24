import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpmashComponent } from './mpmash.component';

describe('MpmashComponent', () => {
  let component: MpmashComponent;
  let fixture: ComponentFixture<MpmashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpmashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpmashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
