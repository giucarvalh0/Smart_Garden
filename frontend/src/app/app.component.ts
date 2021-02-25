import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/products.service';
import { Product } from './models/products';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  product = {} as Product;
  products: Product[];

  constructor(private productService: ProductService) {}
  
  ngOnInit() {
    this.getProducts();
  }

  // defini se um produto será criado ou atualizado
  saveProducts(form: NgForm) {
    if (this.product.id !== undefined) {
      this.productService.updateProducts(this.product).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.productService.saveProducts(this.product).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os produtos
  getProducts() {
    this.productService.getProducts().subscribe((product: Product[]) => {
      this.products = product;
    });
  }

  // deleta um produto
  deleteProducts(product: Product) {
    this.productService.deleteProducts(product).subscribe(() => {
      this.getProducts();
    });
  }

  // copia o produto para ser editado.
  editProducts(product: Product) {
    this.product = { ...product };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getProducts();
    form.resetForm();
    this.product = {} as Product;
  }

}
