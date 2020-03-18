import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidekickDetailsComponent } from './sidekick-details.component';

describe('SidekickDetailsComponent', () => {
  let component: SidekickDetailsComponent;
  let fixture: ComponentFixture<SidekickDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidekickDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidekickDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
