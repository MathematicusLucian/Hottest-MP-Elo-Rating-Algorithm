import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpProfileComponent } from './mp-profile.component';

describe('MpProfileComponent', () => {
  let component: MpProfileComponent;
  let fixture: ComponentFixture<MpProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
