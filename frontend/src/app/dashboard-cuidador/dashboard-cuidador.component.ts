import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { gardenInfoService } from '../services/garden-info.service';
import { GardenInfo } from '../models/garden-info';
import { Product} from '../models/product';
import { ProductService} from '../services/product.service';

import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'dashboard-cuidador',
  templateUrl: './dashboard-cuidador.component.html',
  styleUrls: ['./dashboard-cuidador.component.css']
})
export class DashboardCuidadorComponent implements OnInit {

  gardenInfo = {} as GardenInfo;
  gardenInfos: GardenInfo[];

  product = {} as Product;
  products: Product[];


  constructor(private gardenInfoService: gardenInfoService, private ProductService: ProductService) {}

  ngOnInit() {
    this.getProducts();
    this.getGardenInfos();
  }

  // Dados da horta

  saveGardenInfo(form: NgForm) {
    if (this.gardenInfo.id !== undefined) {
      this.gardenInfoService.updateGardenInfo(this.gardenInfo).subscribe(() => {
        this.cleanGardenForm(form);
      });
    } else {
      this.gardenInfoService.saveGardenInfo(this.gardenInfo).subscribe(() => {
        this.cleanGardenForm(form);
      });
    }
  }

  getGardenInfos() {
    this.gardenInfoService.getGardenInfos().subscribe((gardenInfos: GardenInfo[]) => {
      this.gardenInfos = gardenInfos;
    });
  }

  deleteGardenInfo(gardenInfo: GardenInfo) {
    this.gardenInfoService.deleteGardenInfo(gardenInfo).subscribe(() => {
      this.getGardenInfos();
    });
  }

  editGardenInfo(gardenInfo: GardenInfo) {
    this.gardenInfo = { ...gardenInfo };
  }

  cleanGardenForm(form: NgForm) {
    this.getGardenInfos();
    form.resetForm();
    this.gardenInfo = {} as GardenInfo;
  }  




  // Produtos

  saveProduct(form: NgForm) {
    if (this.product.id !== undefined) {
      this.ProductService.updateProduct(this.product).subscribe(() => {
        this.cleanProductForm(form);
      });
    } else {
      this.ProductService.saveProduct(this.product).subscribe(() => {
        this.cleanProductForm(form);
      });
    }
  }

  getProducts() {
    this.ProductService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  deleteProduct(product: Product) {
    this.ProductService.deleteProduct(product).subscribe(() => {
      this.getProducts();
    });
  }

  editProduct(product: Product) {
    this.product = { ...product };
  }

  
  cleanProductForm(form: NgForm) {
    this.getProducts();
    form.resetForm();
    this.product = {} as Product;
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
