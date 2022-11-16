import { TalentComponent } from './talent.component';
import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { TalentService } from './talent.service';
import { environment } from 'src/environments/environment.prod';

describe('TalentService', () => {
  let service: TalentService;
  let baseUrl: string = environment.baseApiUrl + "Talent/";
  const mockTalentService = jasmine.createSpyObj('svc', ['method']);

  beforeEach(() => {
    TestBed.overrideComponent(
      TalentComponent,
      {set: {
        providers: [{
          provide: TalentService,
          useValue: mockTalentService
        }]
      }
    })
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {service: TalentService, useValue: mockTalentService},
        {service: HttpClient, useValue: mockTalentService}
      ]
    }).compileComponents();
    service = TestBed.inject(TalentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get talent data',
    inject(
      [HttpTestingController, TalentService],
      (httpMock: HttpTestingController, talentService: TalentService) => {

        talentService.getTalentTest().subscribe((event: HttpEvent<any>) => {
          expect(event).toBeTruthy();
        });

        const mockReq = httpMock.expectOne(baseUrl + "get?userId=1");

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        httpMock.verify();
      }
    )
  )
});
