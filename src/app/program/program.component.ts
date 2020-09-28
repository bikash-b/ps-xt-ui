import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Program } from '../models/program.model';

@Component({
  selector: 'xt-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnChanges{

  @Input() program: Program;

  public image;
  public noImage;

  constructor() { }

  /**
   * This is Angular lifecycle method
   */
  ngOnChanges(): void{
    console.log(this.program);
    this.image = this.program.links.mission_patch;
  }
}
