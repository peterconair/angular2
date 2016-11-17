/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthRegisterService } from './auth-register.service';

describe('Service: AutRegister', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthRegisterService]
    });
  });

  it('should ...', inject([AuthRegisterService], (service: AuthRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
