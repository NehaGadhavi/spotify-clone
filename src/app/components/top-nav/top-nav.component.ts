import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  public isSearchFieldVisible: boolean = false;
  @Output() public inputFilterRes: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLoginClick() {
    this.router.navigate(['/login']);
  }

  filterBrowsingList(inputElement: HTMLInputElement) {
    // console.log(inputElement);
    this.inputFilterRes.emit(inputElement.value);
  }
}
