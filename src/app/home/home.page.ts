import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  products: any[] = [];
  allProducts: any[] = [];  
  searchText: string = ''; 

  chips: any[] = [
    {
      chipUrl: "https://cdn-icons-png.flaticon.com/512/1930/1930026.png",
      categoria: "Todo",
      color: "#e4eaf5",  
      textColor: "#000000" 
    },
    {
      chipUrl: "https://cdn-icons-png.flaticon.com/512/448/448173.png",
      categoria: "Papel",
      color: "#e6eeff",  
      textColor: "#000000" 
    },
    {
      chipUrl: "https://cdn-icons-png.flaticon.com/512/1546/1546945.png",
      categoria: "Escolares",
      color: "#ffe6f9",  
      textColor: "#000000" 
    },
    {
      chipUrl: "https://cdn-icons-png.flaticon.com/512/3683/3683305.png",
      categoria: "Cuadernos",
      color: "#f0e6ff",  
      textColor: "#000000" 
    },
    {
      chipUrl: "https://cdn-icons-png.flaticon.com/512/12695/12695315.png",
      categoria: "Escritura",
      color: "#e6ffff",  
      textColor: "#000000" 
    },
    {
      chipUrl: "https://cdn-icons-png.flaticon.com/512/1142/1142618.png",
      categoria: "Oficina",
      color: "#ffffe6",  
      textColor: "#000000" 
    },
    {
      chipUrl: "https://cdn-icons-png.flaticon.com/512/2970/2970785.png",
      categoria: "Arte",
      color: "#fff0e6",
      textColor: "#000000"
    },
    {
      chipUrl: "https://cdn-icons-png.flaticon.com/512/1339/1339350.png",
      categoria: "Impresión",
      color: "#e6eeff",
      textColor: "#000000"
    },
    {
      chipUrl: "https://cdn-icons-png.flaticon.com/512/3813/3813691.png",
      categoria: "Manualidad",
      color: "#f0e6ff",
      textColor: "#000000"
    },
    {
      chipUrl: "https://cdn-icons-png.flaticon.com/512/479/479063.png",
      categoria: "Accesorios",
      color: "#e6ffff",
      textColor: "#000000"
    },
    {
      chipUrl: "https://cdn-icons-png.flaticon.com/512/7813/7813840.png",
      categoria: "Regalos",
      color: "#ffffe6",
      textColor: "#000000"
    },
    {
      chipUrl: "https://cdn-icons-png.flaticon.com/512/716/716784.png",
      categoria: "Archivo",
      color: "#fff0e6",
      textColor: "#000000"
    }
  ]


  constructor(private navCtrl: NavController, private productoService: ProductoService) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.getProductos().subscribe(
      (data) => {
        this.products = data;  
        this.allProducts = [...this.products];  // Guardar todos los productos
      },
      (error) => {
        console.error('Error al cargar productos:', error);
      }
    );
  }

  // Filtrar productos según el texto de búsqueda
  filterProducts() {
    if (this.searchText.trim() === '') {
      this.products = [...this.allProducts];
    } else {
      this.products = this.allProducts.filter(product =>
        product.nombre.toLowerCase().includes(this.searchText.toLowerCase())  
      );
    }
  }

  navigateToDetail(product: any) {
    this.navCtrl.navigateForward('/product-detail', {
      queryParams: product, 
    });
  }

}
