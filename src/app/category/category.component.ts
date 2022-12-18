import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  cate: any = [];
  name: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      console.log(this.name);
      console.log(params);
      this.getCategory();
    })
  }


   getCategory() {
    // call api
     const url = 'https://dummyjson.com/products/category/' + this.name;
     this.http.get<any>(url).subscribe(data => {
      this.cate = data.products;
     })
   }
}
