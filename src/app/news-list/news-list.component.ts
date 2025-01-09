import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Add HttpClientModule here
})
export class NewsListComponent implements OnInit {
  newsList: any[] = [];
  private apiUrl = 'https://news-app-server-03oc.onrender.com/api/news'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        console.log('API response:', data); // Log the response
        this.newsList = data;
      },
      (error) => {
        console.error('API call failed:', error); // Log errors
      }
    );
  }
}
