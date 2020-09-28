import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { FilterValue, Filter } from '../models/filter.model';

fdescribe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the filter value on select of launch year', () => {
    const input: FilterValue = {
      key: '2016',
      value: '2016',
      type: 'launch_year'
    };
    component.onSelect.subscribe(
      (event) => {
        const output = {
          launch_year: '2016',
        };
        expect(event).toEqual(output);
      }
    );
    component.updateFilters(input);
  });

  it('should update the filter value with existing selected filter options', () => {
    const input1: FilterValue = {
      key: '2018',
      value: '2018',
      type: 'launch_year'
    };
    const input2: FilterValue = {
      key: 'True',
      value: 'true',
      type: 'launch_success'
    };
    component.updateFilters(input1);
    component.onSelect.subscribe(
      (event) => {
        const output = {
          launch_success: 'True',
          launch_year: '2018'
        };
        expect(event).toEqual(output);
      }
    );
    component.updateFilters(input2);
  });
});
