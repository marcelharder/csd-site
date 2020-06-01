import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracComponent } from './trac.component';

describe('TracComponent', () => {
  let component: TracComponent;
  let fixture: ComponentFixture<TracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
