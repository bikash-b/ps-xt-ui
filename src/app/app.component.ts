import { Component, OnInit } from '@angular/core';
import { DataService } from './data-service/data.service';
import { Filter } from './models/filter.model';
import { Program } from './models/program.model';

@Component({
  selector: 'xt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'SpaceX Launch Programs';
  public developer = 'Bikash B';
  public filterOptions: any;
  public programs: Program[];

  constructor(
    private dataService: DataService
  ){}

  ngOnInit(): void{
    this.loadPrograms();
    this.dataService
      .getFilterOptions()
      .subscribe(
        (response) => this.filterOptions = response
      );
  }

  public updateListView(event: Filter): void{
    this.loadPrograms(event);
  }

  public loadPrograms(filter?: Filter): void{
    this.dataService
      .getPrograms(filter)
      .subscribe(
        (response) => this.programs = response
      );
  }
}
