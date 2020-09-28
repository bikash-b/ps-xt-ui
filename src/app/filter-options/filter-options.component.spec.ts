import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOptionsComponent } from './filter-options.component';
import { FilterValue } from '../models/filter.model';

fdescribe('FilterOptionsComponent', () => {
  let component: FilterOptionsComponent;
  let fixture: ComponentFixture<FilterOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('set filter options and trigger event', () => {
    const input: FilterValue = {key: '2018', value: '2018'};
    component.filterInfo = {
      type: 'launch_year',
      name: 'Lanuch Year',
      items: []
    };
    component.onSelect.subscribe(
      (event) => {
        const output = {
          key: '2018',
          type: 'launch_year',
          value: '2018',
        };
        expect(event).toEqual(output);
      }
    );
    component.setFilter(input);
  });
});
