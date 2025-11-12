interface Producto {
  nombre: string;
  precio: number;
  categoria: string;
}

const productos: Producto[] = [
  { nombre: 'Laptop', precio: 1200, categoria: 'Electrónica' },
  { nombre: 'Mouse', precio: 25, categoria: 'Accesorios' },
  { nombre: 'Teclado', precio: 80, categoria: 'Accesorios' }
];

console.log(productos);

