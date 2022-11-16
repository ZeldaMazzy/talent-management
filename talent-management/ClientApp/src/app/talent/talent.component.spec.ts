import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentComponent } from './talent.component';
import { TalentService } from './talent.service';

describe('TalentComponent', () => {
  let component: TalentComponent;
  let fixture: ComponentFixture<TalentComponent>;
  const mockTalentService = jasmine.createSpyObj('svc', ['method']);

  beforeEach(async () => {
    await TestBed.overrideComponent(
      TalentComponent,
      {set: {
        providers: [{
          provide: TalentService,
          useValue: mockTalentService
        }]
      }
    })
    await TestBed.configureTestingModule({
      declarations: [ TalentComponent ],
      providers: [
        {service: TalentService, useValue: mockTalentService},
        {service: HttpClient, useValue: mockTalentService}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
