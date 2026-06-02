class Productos {
    constructor(id, nombre, categoria, precio, destacado, cantidad, cuotas, envio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.envio = envio;
        this.cuotas = cuotas;
        this.precio = precio;
        this.destacado = destacado;
        this.cantidad = cantidad;
        this.imagen = imagen;
    };
}

export const createProducts = [
    {
        id: 1,
        nombre: "Heladera Patrick Plateada",
        categoria: "heladeras",
        precio: 549999,
        cuotas: "12 cuotas sin interes",
        envio: "Envio gratis",
        destacado: false,
        cantida: 1,
        imagen: "Images/Products/Heladeras/pngwing.com.png"
    },
    {
        id: 2,
        nombre: "Lavarropas Automatico Drean",
        categoria: "lavarropas",
        precio: 420000,
        cuotas: "6 cuotas sin interes",
        envio: "Envio gratis",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/Heladeras/pngwing.com.png"
    },
    {
        id: 3,
        nombre: "Cocina Florencia 4 Hornallas",
        categoria: "cocinas",
        precio: 310500,
        cuotas: "Mismo precio en 1 pago",
        envio: "Retiro gratis en sucursal",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/Heladeras/pngwing.com.png"
    },
    {
        id: 4,
        nombre: "Que onda muchachos",
        categoria: "heladeras",
        precio: 1000000,
        cuotas: "6 cuotas sin interes",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/Heladeras/pngwing.com.png"
    },
    {
        id: 5,
        nombre: "Cocina Escorial",
        categoria: "cocinas",
        precio: 450000,
        cuotas: "6 cuotas sin interes",
        envio: "Envio gratis",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/Cocinas/cocina-1.png"
    },
    {
        id: 6,
        nombre: "Cocina Florencia",
        categoria: "cocinas",
        precio: 550000,
        cuotas: "12 cuotas sin interes",
        envio: "Retiro en sucursal",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/Cocinas/cocina-2.png"
    },
    {
        id: 7,
        nombre: "Cocina Electrolux",
        categoria: "cocinas",
        precio: 335999,
        cuotas: "3 cuotas sin interes",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/Cocinas/cocina-3.png"
    },
    {
        id: 8,
        nombre: "Cocina Siam",
        categoria: "cocinas",
        precio: 225000,
        cuotas: "6 cuotas sin interes",
        envio: "Retiro en sucursal",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/Cocinas/cocina-4.png"
    }
];