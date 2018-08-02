import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieIndexComponent } from './serie-index.component';

describe('SerieIndexComponent', () => {
  let component: SerieIndexComponent;
  let fixture: ComponentFixture<SerieIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
