import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'dashboard-cliente',
  templateUrl: './dashboard-cliente.component.html',
  styleUrls: ['./dashboard-cliente.component.css']
})
export class DashboardClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  


  
}

$(document).ready(function () {

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

});