import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommenComponent } from './commen.component';

describe('CommenComponent', () => {
  let component: CommenComponent;
  let fixture: ComponentFixture<CommenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
