import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restful-api-consumption',
  templateUrl: './restful-api-consumption.component.html',
  styleUrls: ['./restful-api-consumption.component.scss'],
})
export class RestfulApiConsumptionComponent {
  // The endpoint to fetch my users
  url = 'https://api.github.com/users';
  users: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getUsers();
  }
  // Method to get users
  getUsers() {
    // This prints an obeservable
    // this.url is passed as it is and not as a string
    console.log(this.http.get(this.url));

    this.http.get(this.url).subscribe(
      (res) => {
        console.log('Successful request');
        console.log(res);
        this.users = res;
      },
      (error) => {
        console.log('Request with an error');
      },
      () => console.log('Completed your get request')
    );
  }
  goToGithub(url: string) {
    window.open(url, '_blank');
  }
}
