import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrexitPositionScoreboardComponent } from './brexit-position-scoreboard.component';

describe('BrexitPositionComponent', () => {
  let component: BrexitPositionScoreboardComponent;
  let fixture: ComponentFixture<BrexitPositionScoreboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrexitPositionScoreboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrexitPositionScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
