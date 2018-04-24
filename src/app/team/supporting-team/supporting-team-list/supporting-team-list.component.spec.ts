import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportingTeamListComponent } from './supporting-team-list.component';

describe('SupportingTeamListComponent', () => {
  let component: SupportingTeamListComponent;
  let fixture: ComponentFixture<SupportingTeamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportingTeamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportingTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
