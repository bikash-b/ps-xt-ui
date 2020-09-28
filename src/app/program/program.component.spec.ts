import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramComponent } from './program.component';

fdescribe('ProgramComponent', () => {
  let component: ProgramComponent;
  let fixture: ComponentFixture<ProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('d', () => {
    const input = {
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
    };

    component.program = input;
    component.ngOnChanges();
    expect(component.image).toEqual('https://images2.imgbox.com/40/e3/GypSkayF_o.png');
  });
});
