import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INDEXComponent } from './index.component';

describe('INDEXComponent', () => {
  let component: INDEXComponent;
  let fixture: ComponentFixture<INDEXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ INDEXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(INDEXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
