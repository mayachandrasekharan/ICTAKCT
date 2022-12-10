import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequireformComponent } from './requireform.component';

describe('RequireformComponent', () => {
  let component: RequireformComponent;
  let fixture: ComponentFixture<RequireformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequireformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequireformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
