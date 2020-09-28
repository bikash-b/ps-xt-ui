import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FilterOption } from '../models/filter.model';
import { of } from 'rxjs';

fdescribe('DataService', () => {
  let service: DataService;
  let httpClientSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(DataService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new DataService(httpClientSpy as any);
  });

  it('should return expected filter options (HttpClient called once)', () => {
    const expectedfilterOptions =
    [
      {
        type: 'launch_success',
        name: 'Successful Launch',
        items: [
            {
                key: true,
                value: 'True'
            },
            {
                key: false,
                value: 'False'
            }
        ]

      }
    ];

    httpClientSpy.get.and.returnValue(of(expectedfilterOptions));

    service.getFilterOptions().subscribe(
      filterOptions => expect(filterOptions).toEqual(expectedfilterOptions, 'expected filter options'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return expected programs (HttpClient called once)', () => {
    const expectedPrograms =
    [
      {
        flight_number: 1,
        mission_name: 'FalconSat',
        mission_id: [],
        upcoming: false,
        launch_year: 2006,
        launch_date_unix: 1143239400,
        launch_date_utc: '2006-03-24T22:30:00.000Z',
        launch_date_local: '2006-03-25T10:30:00+12:00',
        is_tentative: false,
        tentative_max_precision: 'hour',
        launch_success: true,
        links: {
          mission_patch: 'https://images2.imgbox.com/40/e3/GypSkayF_o.png'
        }
        // ...
      }
    ];

    httpClientSpy.get.and.returnValue(of(expectedPrograms));

    service.getPrograms().subscribe(
      filterOptions => expect(filterOptions).toEqual(expectedPrograms, 'expected programs'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
