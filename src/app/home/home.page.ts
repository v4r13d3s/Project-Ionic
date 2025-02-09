import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  products: any[] = [
    {
      productUrl: "https://tonypapelerias.vtexassets.com/arquivos/ids/275111-1200-auto?v=638556519490570000&width=1200&height=auto&aspect=true%201200w",
      nombre: "Lápiz con Goma Número 2 Hexagonal Blíster con 4 Piezas Mirado",
      precio: "$23.30"
    },
    {
      productUrl: "https://tonypapelerias.vtexassets.com/arquivos/ids/274889-800-450?v=638556518635830000&width=800&height=450&aspect=true",
      nombre: "Lápiz con Goma Número 2 Triangular con 10 Piezas Black Peps Maped",
      precio: "$48.60"
    },
    {
      productUrl: "https://tonypapelerias.vtexassets.com/arquivos/ids/279130-800-auto?v=638556535732330000&width=800&height=auto&aspect=true",
      nombre: "Papel Bond Tamaño Carta Blanco de 37 kg con 500 Hojas Smart Multifuncional",
      precio: "$79.50"
    },
    {
      productUrl: "https://tonypapelerias.vtexassets.com/arquivos/ids/274818-800-auto?v=638556518197100000&width=800&height=auto&aspect=true",
      nombre: "Sacapuntas de Plástico con Depósito Chico Igloo Blíster con 2 Piezas Maped",
      precio: "$23.30"
    },
    {
      productUrl: "https://tonypapelerias.vtexassets.com/arquivos/ids/275096-800-auto?v=638556519455030000&width=800&height=auto&aspect=true",
      nombre: "Nota Adhesivas de 7.5 x 7.5 cm Colores Neón con 100 Hojas Memo Tip",
      precio: "$21.00"
    },
    {
      productUrl: "https://tonypapelerias.vtexassets.com/arquivos/ids/275804-800-auto?v=638556522632700000&width=800&height=auto&aspect=true",
      nombre: "Cuaderno Espiral de 100 Hojas Profesional de Cuadro Grande Ferrari",
      precio: "$91.10"
    },
    {
      productUrl: "https://tonypapelerias.vtexassets.com/arquivos/ids/271290-800-auto?v=638556501960500000&width=800&height=auto&aspect=true",
      nombre: "Bolígrafo Punto Mediano Stick Negro Caja con 12 Piezas Bic Dura+ Bic",
      precio: "$48.50"
    },
    {
      productUrl: "https://tonypapelerias.vtexassets.com/arquivos/ids/278434-800-auto?v=638556533332870000&width=800&height=auto&aspect=true",
      nombre: "Corrector Líquido Blanco Tipo Pluma 7 ml Caja con 10 Piezas Smart",
      precio: "$150.00"
    }
  ]

  chips: any[] = [
    {
      chipUrl: "https://cdn-icons-png.flaticon.com/512/448/448173.png",
      categoria: "Papel",
      color: "#e6eeff",  // Color de fondo
      textColor: "#000000" // Color del texto
    },
    {
      chipUrl: "https://cdn-icons-png.flaticon.com/512/1546/1546945.png",
      categoria: "Escolares",
      color: "#ffe6f9",  // Color de fondo
      textColor: "#000000" // Color del texto
    },
    {
      chipUrl: "https://cdn-icons-png.flaticon.com/512/3683/3683305.png",
      categoria: "Cuadernos",
      color: "#f0e6ff",  // Color de fondo
      textColor: "#000000" // Color del texto
    },
    {
      chipUrl: "https://cdn-icons-png.flaticon.com/512/12695/12695315.png",
      categoria: "Escritura",
      color: "#e6ffff",  // Color de fondo
      textColor: "#000000" // Color del texto
    },
    {
      chipUrl: "https://cdn-icons-png.flaticon.com/512/1142/1142618.png",
      categoria: "Oficina",
      color: "#ffffe6",  // Color de fondo
      textColor: "#000000" // Color del texto
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


  

  constructor() {}

}
