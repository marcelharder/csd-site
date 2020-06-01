import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CassetteExplainComponent } from './cassette-explain.component';

describe('CassetteExplainComponent', () => {
  let component: CassetteExplainComponent;
  let fixture: ComponentFixture<CassetteExplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CassetteExplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CassetteExplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
