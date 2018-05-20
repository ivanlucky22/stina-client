import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-filters-form',
  templateUrl: './filters-form.component.html',
  styleUrls: ['./filters-form.component.css']
})
export class FiltersFormComponent implements OnInit {

  filterList: Array<string> = [];
  selectedFiler: string;

  constructor() {
  }

  ngOnInit() {
    this.filterList.push('Новое');
    this.filterList.push('Интересное');
    this.filterList.push('Новости');
    this.filterList.push('Истории');
    this.selectedFiler = this.filterList[0];
  }

  onFilterSelected(filter: any) {
    this.selectedFiler = filter;
  }
}
