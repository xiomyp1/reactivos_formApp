import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqitchesPageComponent } from './switches-page.component';

describe('SqitchesPageComponent', () => {
  let component: SqitchesPageComponent;
  let fixture: ComponentFixture<SqitchesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqitchesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqitchesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
