import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaNgxConfirmComponent } from './ia-ngx-confirm.component';

describe('IaNgxConfirmComponent', () => {
  let component: IaNgxConfirmComponent;
  let fixture: ComponentFixture<IaNgxConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaNgxConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaNgxConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
