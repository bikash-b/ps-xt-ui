import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Filter, FilterOption, FilterValue } from '../models/filter.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'xt-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss']
})
export class FilterOptionsComponent {

  @Input() filterInfo: FilterOption;
  @Output() onSelect: EventEmitter<FilterValue>
    = new EventEmitter(null);

  private selectedFilter: FilterValue;

  constructor() { }

  /**
   * @description This method is to set the selected filter.
   */
  public setFilter(event: FilterValue): void{
    this.selectedFilter = {...event, type: this.filterInfo.type};
    this.onSelect.next(this.selectedFilter);
  }
}
