import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private router : Router) {}

  bookFlag : boolean = false;

  ngOnInit(): void {

  }

  newBook(){
    this.bookFlag = !this.bookFlag;
    this.router.navigateByUrl('#book');
    if(this.bookFlag == false) {
      this.router.navigate(['']);
    }
  }
}
