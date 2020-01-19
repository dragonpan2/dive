import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiveFeedComponent } from './dive-feed.component';

describe('DiveFeedComponent', () => {
  let component: DiveFeedComponent;
  let fixture: ComponentFixture<DiveFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiveFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiveFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
