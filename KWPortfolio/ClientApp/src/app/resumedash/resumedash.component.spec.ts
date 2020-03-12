import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumedashComponent } from './resumedash.component';

describe('ResumedashComponent', () => {
  let component: ResumedashComponent;
  let fixture: ComponentFixture<ResumedashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumedashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
