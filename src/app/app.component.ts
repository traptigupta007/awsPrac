import { Component } from '@angular/core';
import { CallApiService } from './services/call-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiData:any;
  constructor(private apiService: CallApiService) { }
  ngOnInit() {
    console.log("hi");
      this.apiService.getUsers().subscribe((data: any) => {

        console.log(data)
        this.apiData=data;
      });
  }
}
