import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditresponseComponent } from './editresponse.component';

describe('EditresponseComponent', () => {
  let component: EditresponseComponent;
  let fixture: ComponentFixture<EditresponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditresponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
