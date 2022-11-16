import { TalentService } from './talent.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.css']
})
export class TalentComponent implements OnInit {

  constructor(private _talentService: TalentService) { }

  ngOnInit(): void {
  }

  onFetch() {
    this._talentService.getTalent();
  }

  onFetchOne() {
    this._talentService.getSingleTalent(1);
  }

}
