import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

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
      precio: "$23.30",
      category: "Escolar",
      description: "LAPIZ CON GOMA MIRADO NO. 2 HEXAGONAL 4 PZAS, Blister con 4 lápices de grafito, Lápiz grafito de #2 Hexagonal,No tóxico.| 0100243066"
    },
    {
      productUrl: "https://tonypapelerias.vtexassets.com/arquivos/ids/274889-800-450?v=638556518635830000&width=800&height=450&aspect=true",
      nombre: "Lápiz con Goma Número 2 Triangular con 10 Piezas Black Peps Maped",
      precio: "$48.60",
      category: "Escolar",
      description: "Lápiz con Goma No. 2 Triangular C/10 Pzas. Black Peps Maped 851762ZV"
    },
    {
      productUrl: "https://tonypapelerias.vtexassets.com/arquivos/ids/279130-800-auto?v=638556535732330000&width=800&height=auto&aspect=true",
      nombre: "Papel Bond Tamaño Carta Blanco de 37 kg con 500 Hojas Smart Multifuncional",
      precio: "$79.50",
      category: "Escolar",
      description: "Papel Bond Tamaño Carta Blanco de 37 kg con 500 Hojas Smart Multifuncional\n\nEl papel bond tamaño carta Smart es una solución confiable y versátil para tus necesidades de impresión y escritura. "

    },
    {
      productUrl: "https://tonypapelerias.vtexassets.com/arquivos/ids/274818-800-auto?v=638556518197100000&width=800&height=auto&aspect=true",
      nombre: "Sacapuntas de Plástico con Depósito Chico Igloo Blíster con 2 Piezas Maped",
      precio: "$23.30",
      category: "Escolar",
      description: "Sacapuntas de Plástico con Depósito Chico Igloo Blt C/2 Pzas. Maped 634754ZM"
    },
    {
      productUrl: "https://tonypapelerias.vtexassets.com/arquivos/ids/275096-800-auto?v=638556519455030000&width=800&height=auto&aspect=true",
      nombre: "Nota Adhesivas de 7.5 x 7.5 cm Colores Neón con 100 Hojas Memo Tip",
      precio: "$21.00",
      category: "Escolar",
      description: "Notas Adhesivas de 5 x 7.5 cm Colores Neón Bol con 2 Colores Amarillo Y Rosa C/100 hojas Memo Tip 6560203798"
    },
    {
      productUrl: "https://tonypapelerias.vtexassets.com/arquivos/ids/275804-800-auto?v=638556522632700000&width=800&height=auto&aspect=true",
      nombre: "Cuaderno Espiral de 100 Hojas Profesional de Cuadro Grande Ferrari",
      precio: "$91.10",
      category: "Escolar",
      description: "Ferrari es un cuaderno de argolla doble tamaño profesional de 100 hojas. El interior tiene las guardas impresas y bolsillo de gran utilidad para los estudiantes. Las portadas son atractivas por su variedad de diseños. 10 diseños disponibles.| 525143"
    },
    {
      productUrl: "https://tonypapelerias.vtexassets.com/arquivos/ids/271290-800-auto?v=638556501960500000&width=800&height=auto&aspect=true",
      nombre: "Bolígrafo Punto Mediano Stick Negro Caja con 12 Piezas Bic Dura+ Bic",
      precio: "$48.50",
      category: "Escolar",
      description: "El bolígrafo ícono de BIC® con más de 60 años en el mercado, Para escribir mucho, rinde más de 2 km, Tapa ventilada para evitar asfixia, Punto mediano 1.0 mm, Cuerpo hexagonal, Caja con 12 piezas, Tinta color negro.| 923995"
    },
    {
      productUrl: "https://tonypapelerias.vtexassets.com/arquivos/ids/278434-800-auto?v=638556533332870000&width=800&height=auto&aspect=true",
      nombre: "Corrector Líquido Blanco Tipo Pluma 7 ml Caja con 10 Piezas Smart",
      precio: "$150.00",
      category: "Escolar",
      description: "Corrector Líquido Blanco Tipo Pluma 7 ml Cja C/10 Pzas. Smart 30062"
    },
    {
      productUrl: "https://tonypapelerias.vtexassets.com/arquivos/ids/272583-600-338?v=638556507146800000&width=600&height=338&aspect=true%20600w,https://tonypapelerias.vtexassets.com/arquivos/ids/272583-800-450?v=638556507146800000&width=800&height=450&aspect=true%20800w,https://tonypapelerias.vtexassets.com/arquivos/ids/272583-1200-675?v=638556507146800000&width=1200&height=675&aspect=true%201200w",
      nombre: "Cartulina Opalina Tamaño Carta Blanco con 100 Hojas",
      precio: "$163.00",
      category: "Escolar",
      description: "Cartulina Opalina Tamaño Carta Blanco con 100 Hojas"
    },
    {
      productUrl: "https://tonypapelerias.vtexassets.com/arquivos/ids/279374-800-450?v=638556536822570000&width=800&height=450&aspect=true",
      nombre: "Diamantina Fina Bote con 200 g Azul Turquesa Smarty",
      precio: "$60.20",
      category: "Escolar",
      description: "Diamantina Fina Bte C/200 gr Azul Turquesa Smarty 50154."
    },
    {
      productUrl: "https://tonypapelerias.vtexassets.com/arquivos/ids/273383-800-450?v=638556511121130000&width=800&height=450&aspect=true",
      nombre: "Papel Fotográfico Glossy Tamaño Carta 200 g con 25 Hojas IBM",
      precio: "$279.00",      
      category: "Escolar",
      description: "Papel Fotográfico Glossy Tamaño Carta 200 gr C/25 hojas IBM 17R7945"
    },
    {
      productUrl: "https://tonypapelerias.vtexassets.com/arquivos/ids/282581-800-450?v=638566833231270000&width=800&height=450&aspect=true",
      nombre: "Agenda Memorandum de Lujo Hazel",
      precio: "$212.00",
      category: "Escolar",
      description: "Agenda Memorandum de Lujo Hazel 365-90"
    }
  ]

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


  constructor(private navCtrl: NavController) {}

  navigateToDetail(product: any) {
    this.navCtrl.navigateForward('/product-detail', {
      queryParams: product, 
    });
  }


  



}
