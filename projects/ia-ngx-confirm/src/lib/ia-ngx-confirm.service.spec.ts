import { TestBed } from '@angular/core/testing';

import { IaNgxConfirmService } from './ia-ngx-confirm.service';

describe('IaNgxConfirmService', () => {
  let service: IaNgxConfirmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaNgxConfirmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
