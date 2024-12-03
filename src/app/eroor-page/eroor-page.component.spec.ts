import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EroorPageComponent } from './eroor-page.component';

describe('EroorPageComponent', () => {
  let component: EroorPageComponent;
  let fixture: ComponentFixture<EroorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EroorPageComponent]
    });
    fixture = TestBed.createComponent(EroorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
