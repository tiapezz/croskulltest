import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MRightsComponent } from './m-rights.component';

describe('MRightsComponent', () => {
  let component: MRightsComponent;
  let fixture: ComponentFixture<MRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MRightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
