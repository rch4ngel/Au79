import { TestBed, inject } from '@angular/core/testing';

import { SparkService } from './spark.service';

describe('SparkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SparkService]
    });
  });

  it('should be created', inject([SparkService], (service: SparkService) => {
    expect(service).toBeTruthy();
  }));
});
