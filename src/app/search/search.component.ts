import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { StateService } from '../services/state.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  people: any[] = []
  color: string = ''
  search: string = ''
  errorMessage: string = ''

  onValueReceived(value: string) {
    this.color = value
    this.stateService.setState('color', this.color)
  }

  onSearchChange(value: string) {
    this.search = value
    this.stateService.setState('search', this.search)
  }

  executeSearch() {
    this.fetchData()
  }

  constructor(private apiService: ApiService, private stateService: StateService) { }

  fetchData() {
    this.apiService.getPeople(`color=${this.color}&term=${this.search}`).subscribe(
      (response) => {
        this.people = response.matches
        this.errorMessage = ''
      },
      (error) => {
        this.errorMessage = error.message
        console.log('Error fetching data', error)
      }
    )
  }

  ngOnInit(): void {
    this.color = this.stateService.getState('color') ?? ''
    this.search = this.stateService.getState('search') ?? ''
    this.fetchData()
  }

  ngOnDestroy(): void {
    this.stateService.setState('color', this.color);
    this.stateService.setState('search', this.search);
  }

}
