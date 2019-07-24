import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpmashScoreboardComponent } from './mpmash-scoreboard.component';

describe('MpmashScoreboardComponent', () => {
  let component: MpmashScoreboardComponent;
  let fixture: ComponentFixture<MpmashScoreboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpmashScoreboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpmashScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
