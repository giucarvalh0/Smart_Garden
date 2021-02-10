import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'dashboard-cuidador',
  templateUrl: './dashboard-cuidador.component.html',
  styleUrls: ['./dashboard-cuidador.component.css']
})
export class DashboardCuidadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
$(document).ready(function () {

  // $("#sidebar").mCustomScrollbar({
  //      theme: "minimal"
  // });

  $('#sidebarCollapse').on('click', function () {
      // open or close navbar
      $('#sidebar').toggleClass('active');
      // close dropdowns
      $('.collapse.in').toggleClass('in');
      // and also adjust aria-expanded attributes we use for the open/closed arrows
      // in our CSS
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });

});
