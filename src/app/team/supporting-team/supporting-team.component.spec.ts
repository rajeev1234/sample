import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportingTeamComponent } from './supporting-team.component';

describe('SupportingTeamComponent', () => {
  let component: SupportingTeamComponent;
  let fixture: ComponentFixture<SupportingTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportingTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportingTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
