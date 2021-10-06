import { TestBed } from '@angular/core/testing';

import { ServiceImagenService } from './service-imagen.service';

describe('ServiceImagenService', () => {
  let service: ServiceImagenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceImagenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
