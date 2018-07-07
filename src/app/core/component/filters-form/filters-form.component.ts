import {Component, OnInit} from '@angular/core';
import {Filter} from "@app/core/model/filter";

@Component({
  selector: 'app-filters-form',
  templateUrl: './filters-form.component.html',
  styleUrls: ['./filters-form.component.css']
})
export class FiltersFormComponent implements OnInit {

  filterList: Array<Filter> = [];
  selectedFiler: Filter;

  constructor() {
  }

  ngOnInit() {
    this.filterList.push(new Filter('article.filter.new', 'new'));
    this.filterList.push(new Filter('article.filter.interesting', 'interesting'));
    this.filterList.push(new Filter('article.filter.news', 'news'));
    this.filterList.push(new Filter('article.filter.stories', 'stories'));
    this.selectedFiler = this.filterList[0];
  }

  onFilterSelected(filter: Filter) {
    this.selectedFiler = filter;
  }
}
