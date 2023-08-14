import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  type = "";

  ngOnInit() {
    const storedType = sessionStorage.getItem('type');
    this.type = storedType !== null ? storedType : ''; // Provide a default value if null
  }

  title = 'argon-dashboard-angular';
}
