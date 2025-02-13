import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import jsPDF from 'jspdf';
import JsBarcode from 'jsbarcode';
import 'jspdf-autotable';
import { HttpClient } from '@angular/common/http';

interface CartItem {
  name: string;
  description: string;
  category: string;
  price: number;
  favorite: boolean;
  imageUrl: string;
  quantity: number;
  stock: number;
}

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: false,
})
export class CarritoPage implements OnInit {
  cartItems: CartItem[] = [
    {
      name: 'Teclado Mecánico RGB',
      description: 'Teclado gamer con retroiluminación RGB.',
      category: 'Periféricos',
      price: 1200,
      favorite: false,
      imageUrl: '',
      quantity: 1,   
      stock: 10,     
    },
    {
      name: 'Mouse Gaming',
      description: 'Mouse ergonómico con sensor de alta precisión.',
      category: 'Periféricos',
      price: 800,
      favorite: false,
      imageUrl: '',
      quantity: 1,   
      stock: 5,      
    }
  ];

  userAddress = {
    name: '',   
    street: '',
    number: '',
    postalCode: '',
    phone: '',
    email: '',
    municipio: '',
    ciudad: ''
  };


  showAddressModal = false;

  constructor(private modalCtrl: ModalController, private http: HttpClient) { }

  ngOnInit() { }

  removeFromCart(item: CartItem) {
    this.cartItems = this.cartItems.filter(product => product !== item);
  }

  increaseQuantity(item: CartItem) {
    if (item.quantity < item.stock) {
      item.quantity++;
    }
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  async checkout() {
    this.showAddressModal = true;
  }

  saveAddress() {
    if (this.validateAddress(this.userAddress)) {
      this.showAlert('Confirmación', 'Dirección guardada correctamente.');
      this.showAddressModal = false;   
    } else {
      this.showAlert('Error', 'Por favor, complete todos los campos correctamente.');
    }
  }

  validateAddress(address: any): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!address.street || !address.number || !address.postalCode || !address.phone || !address.email) {
      return false;
    }

    if (!emailRegex.test(address.email)) {
      this.showAlert('Error', 'Por favor, ingrese un correo electrónico válido.');
      return false;
    }

    if (!phoneRegex.test(address.phone)) {
      this.showAlert('Error', 'Por favor, ingrese un número de teléfono válido (10 dígitos).');
      return false;
    }

    return true;
  }

  async showAlert(header: string, message: string) {
    alert(`${header}: ${message}`);
  }

  generateTicket() {
    const doc: any = new jsPDF();

    const logoUrl = 'assets/images/product-default.png';  
    doc.addImage(logoUrl, 'PNG', 15, 15, 30, 30);  
    
    doc.setFont('helvetica', 'normal');
    doc.setFillColor(255, 255, 255);  
    doc.setTextColor(0, 0, 0);  
  

    doc.setFontSize(20);
    doc.text('Marías Store', 105, 20, { align: 'center' });
    doc.setFontSize(12);
    doc.text('Ubicación: Calle 123, Papelería Centro', 105, 30, { align: 'center' });
    doc.text('Teléfono: 271-260-9620', 105, 40, { align: 'center' });
  
    doc.line(10, 45, 200, 45);  
    doc.text('Dirección de Envío:', 15, 60);
    
    doc.setFontSize(12);
    doc.text(`Destinatario: ${this.userAddress.name}`, 15, 70);
    doc.text(`Dirección: ${this.userAddress.street} # ${this.userAddress.number}`, 15, 80);
    doc.text(`CP: ${this.userAddress.postalCode}`, 15, 90);
    doc.text(`Teléfono: ${this.userAddress.phone}`, 15, 100);
    doc.text(`Correo: ${this.userAddress.email}`, 15, 110);
  
    doc.line(10, 115, 200, 115);
  
    const startY = 130;
    const tableColumn = ["Producto", "Descripción", "Precio", "Cantidad"];
    const tableRows = this.cartItems.map(item => [item.name, item.description, `$${item.price}`, item.quantity]);
  
    doc.autoTable({
      startY: startY,
      head: [tableColumn],
      body: tableRows,
      theme: 'grid',
      headStyles: {
        fillColor: [255, 182, 193],  
        textColor: 0,  
        fontSize: 10,
        font: 'helvetica'
      },
      bodyStyles: {
        fillColor: [245, 245, 245], 
        textColor: 0,  
        fontSize: 10,
        font: 'helvetica'
      },
      styles: {
        cellPadding: 5,
        lineWidth: 0.5,
        lineColor: [200, 200, 200]  
      }
    });
  
    const subtotal = this.getTotal();
    const iva = subtotal * 0.16;
    const total = subtotal + iva;
  
    const footerY = doc.lastAutoTable.finalY + 10;
    doc.setFontSize(12);
    
    doc.setTextColor(0, 0, 0);  
    doc.text(`Subtotal: $${subtotal.toFixed(2)}`, 15, footerY);
    doc.text(`IVA (16%): $${iva.toFixed(2)}`, 15, footerY + 10);
    doc.setFontSize(14);
    doc.text(`Total: $${total.toFixed(2)}`, 15, footerY + 20);
    
    doc.line(10, footerY + 25, 200, footerY + 25);
  
    const barcodeValue = Date.now().toString();
    const canvas = document.createElement('canvas');
    JsBarcode(canvas, barcodeValue, { format: 'CODE128' });
    const barcodeData = canvas.toDataURL('assets/image/product-default.png');
    doc.addImage(barcodeData, 'PNG', 15, footerY + 30, 100, 30);
  
    doc.save('ticket.pdf');
  }
  


  finalizarCompra() {
    if (this.userAddress.street && this.userAddress.number && this.userAddress.postalCode && this.userAddress.phone && this.userAddress.email) {
      this.generateTicket();
    } else {
      this.showAlert('Error', 'Por favor, ingresa una dirección válida antes de finalizar la compra.');
    }
  }

  toggleFavorite(item: CartItem) {
    item.favorite = !item.favorite;
  }

  fetchPostalCodeData(postalCode: string) {
    const url = `https:api.zippopotam.us/MX/${postalCode}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data && data.places && data.places.length > 0) {
          this.userAddress.municipio = data.places[0]['municipality'] || data.places[0]['state'];
          this.userAddress.ciudad = data.places[0]['city'] || data.places[0]['state'];
        } else {
          this.showAlert('Error', 'No se encontraron datos para este código postal.');
        }
      })
      .catch(error => {
        this.showAlert('Error', 'Hubo un problema al obtener los datos del código postal.');
      });
  }

  onPostalCodeBlur() {
    const postalCode = this.userAddress.postalCode;
    if (postalCode && postalCode.length === 5) {
      this.fetchPostalCodeData(postalCode);
    } else {
      this.showAlert('Error', 'Por favor ingrese un código postal válido de 5 dígitos.');
    }
  }
}
