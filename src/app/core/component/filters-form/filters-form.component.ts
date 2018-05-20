import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-filters-form',
  templateUrl: './filters-form.component.html',
  styleUrls: ['./filters-form.component.css']
})
export class FiltersFormComponent implements OnInit {

  filterList: Array<string> = [];
  selectedFiler: string;

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.filterList.push('article.filter.new');
    this.filterList.push('article.filter.interesting');
    this.filterList.push('article.filter.news');
    this.filterList.push('article.filter.stories');
    this.selectedFiler = this.filterList[0];
  }

  onFilterSelected(filter: any) {
    this.selectedFiler = filter;
  }
}
