import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

interface QuotesByLikes {
  [likes: number]: string[];
}

interface Person {
  id: number,
  name: string,
  favorite_color: string,
  quotes: QuotesByLikes
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  person: Person = {} as Person;
  personId: string | null = null;
  transformedQuotes: { quote: string, likes: number }[] = [];
  errorMessage: string = ''

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  fetchData() {
    this.apiService.getDetails(this.personId).subscribe(
      (response) => {
        this.person = response
        this.transformQuotes()
        this.sortQuotes()
        this.errorMessage = ''
      },
      (error) => {
        this.errorMessage = error.message
        console.log('Error fetching data', error)
      }
    )
  }

  transformQuotes() {
    for (const likes in this.person.quotes) {
      this.person.quotes[likes].forEach(quote => {
        this.transformedQuotes.push({
          quote: quote,
          likes: parseInt(likes)
        });
      });
    }
  }

  sortQuotes() {
    this.transformedQuotes.sort((a, b) => {
      if (b.likes !== a.likes) {
        return b.likes - a.likes;
      }

      return a.quote.localeCompare(b.quote);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.personId = params['id'];
    });
    this.fetchData()
  }

}
