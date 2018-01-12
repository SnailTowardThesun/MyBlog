import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSlideComponent } from './index-slide.component';

describe('IndexSlideComponent', () => {
  let component: IndexSlideComponent;
  let fixture: ComponentFixture<IndexSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
