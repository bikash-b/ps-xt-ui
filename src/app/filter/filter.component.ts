import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterValue, Filter, FilterOption } from '../models/filter.model';

@Component({
  selector: 'xt-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Input() filterOptions: FilterOption[];
  @Output() onSelect: EventEmitter<Filter>
    = new EventEmitter(null);

  private selectedFilters: Filter;

  constructor() {}

  public updateFilters(event: FilterValue): void{
    if (!this.selectedFilters){
      this.selectedFilters = {} as Filter;
    }
    this.selectedFilters[event.type] = event.key;
    this.onSelect.next(this.selectedFilters);
  }

}
