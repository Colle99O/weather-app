import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import cities from 'src/app/cities';

@Component({
  selector: 'home-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss'],
})
export class CitySearchComponent implements OnInit {
  isFocused: boolean = false;
  autoCompleteItems: Array<any> = [];
  query: string = '';
  @Output() sendQuery = new EventEmitter();

  onChange() {
    this.autoCompleteItems = cities.filter((x) =>
      x.name.toLowerCase().startsWith(this.query.trim().toLocaleLowerCase())
    );
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (
      this.autoCompleteItems.length == 1 &&
      this.autoCompleteItems[0].name == this.query
    ) {
      this.sendQuery.emit({ value: this.autoCompleteItems[0] });
    }
  }

  onItemSelect(item: any) {
    this.query = item.name;
    this.sendQuery.emit({ value: item });
  }

  get showAutoComplete() {
    return this.isFocused && this.query;
  }

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    setTimeout(() => {
      this.isFocused = false;
      this.onChange();
    }, 200);
  }

  ngOnInit() {}
}
