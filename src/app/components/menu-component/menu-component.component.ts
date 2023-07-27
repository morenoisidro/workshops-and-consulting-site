import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/routes';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponentComponent implements OnInit {

  public readonly RoutePaths = Route;

  constructor() { }

  ngOnInit(): void {
  }

}
