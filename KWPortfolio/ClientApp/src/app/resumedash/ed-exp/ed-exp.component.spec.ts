import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdExpComponent } from './ed-exp.component';

describe('EdExpComponent', () => {
  let component: EdExpComponent;
  let fixture: ComponentFixture<EdExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
