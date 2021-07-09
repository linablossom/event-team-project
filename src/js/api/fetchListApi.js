const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';
const KEY = 'zmv5ycaaMcAkjXVPmARuWy8ikjOOOG9S';

class SearchService {
  constructor() {
    this.searchQuery = '';
    this.page = 0;
    this.searchCountry = '';
  }
  async fetchApiEvent() {
    // const url = `${BASE_URL}/events?keyword=${this.searchQuery}&apikey=${KEY}&countryCode=${this.country}&page=${this.page}&source=universe`;
    const url = `${BASE_URL}/events?keyword=${this.searchQuery}&apikey=${KEY}&countryCode=${this.country}&page=${this.page}`;

    // &page=${this.page}
    // console.log(this);
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data); //Нам приходит массив объектов из _embedded
    const { _embedded } = data;
    // console.log(_embedded.events);
    return _embedded.events;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  get country() {
    return this.searchCountry;
  }
  set country(newCountry) {
    this.searchCountry = newCountry;
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 0;
  }
}

const searchService = new SearchService();
export default searchService;

// Это надо будет перенести в файл js
// searchService.fetchApiEvent();
