import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpExpensesScoreboardComponent } from './mp-expenses-scoreboard.component';

describe('MpExpensesScoreboardComponent', () => {
  let component: MpExpensesScoreboardComponent;
  let fixture: ComponentFixture<MpExpensesScoreboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpExpensesScoreboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpExpensesScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
