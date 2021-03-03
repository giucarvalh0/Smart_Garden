import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'dashboard-cuidador',
  templateUrl: './dashboard-cuidador.component.html',
  styleUrls: ['./dashboard-cuidador.component.css']
})
export class DashboardCuidadorComponent implements OnInit {


    product = {} as Product;
    products: Product[];
  
    constructor(private productService: ProductService) {}
  
    ngOnInit() {
      this.getProducts();
    }
  
    // define se um produto será criado ou atualizado
    saveProduct(form: NgForm) {
      if (this.product.id !== undefined) {
        this.productService.updateProduct(this.product).subscribe(() => {
          this.cleanForm(form);
        });
      } else {
        this.productService.saveProduct(this.product).subscribe(() => {
          this.cleanForm(form);
        });
      }
    }
  
    // Chama o serviço para obtém todos os produtos
    getProducts() {
      this.productService.getProducts().subscribe((products: Product[]) => {
        this.products = products;
      });
    }
  
    // deleta um produto
    deleteProduct(product: Product) {
      this.productService.deleteProduct(product).subscribe(() => {
        this.getProducts();
      });
    }
  
    // copia o produto para ser editado.
    editProduct(product: Product) {
      this.product = { ...product };
    }
  
    // limpa o formulario
    cleanForm(form: NgForm) {
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
