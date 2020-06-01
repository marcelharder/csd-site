import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HemoUploaderComponent } from './hemo-uploader.component';

describe('HemoUploaderComponent', () => {
  let component: HemoUploaderComponent;
  let fixture: ComponentFixture<HemoUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HemoUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HemoUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
