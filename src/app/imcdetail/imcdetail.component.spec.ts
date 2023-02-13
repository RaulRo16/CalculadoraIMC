import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMCDetailComponent } from './imcdetail.component';

describe('IMCDetailComponent', () => {
  let component: IMCDetailComponent;
  let fixture: ComponentFixture<IMCDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IMCDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IMCDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
