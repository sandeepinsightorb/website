import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurworktwoComponent } from './ourworktwo.component';

describe('OurworktwoComponent', () => {
  let component: OurworktwoComponent;
  let fixture: ComponentFixture<OurworktwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurworktwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurworktwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
