import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeceasedCasesComponent } from './deceased-cases.component';

describe('DeceasedCasesComponent', () => {
  let component: DeceasedCasesComponent;
  let fixture: ComponentFixture<DeceasedCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeceasedCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeceasedCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
