import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTermComponent } from './active-term.component';

describe('ActiveTermComponent', () => {
  let component: ActiveTermComponent;
  let fixture: ComponentFixture<ActiveTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
