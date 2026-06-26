class Productos {
    constructor(id, nombre, categoria, precio, destacado, cantidad, cuotas, envio, imagen, descripcion, especificaciones) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.envio = envio;
        this.cuotas = cuotas;
        this.precio = precio;
        this.destacado = destacado;
        this.cantidad = cantidad;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.especificaciones = especificaciones;
    };
}

export const createProducts = [
    {
        id: 1,
        nombre: "Heladera Patrick Plateada HPK135M00S",
        categoria: "heladeras",
        precio: 549999,
        cuotas: "12 cuotas sin interés",
        envio: "Envio gratis",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/heladeras/patrick.png",
        descripcion: "Combina un diseño elegante en acabado silver con la máxima eficiencia en conservación. Ideal para optimizar el espacio gracias a sus estantes regulables de alta resistencia.",
        especificaciones: {
            tipo: "Cíclica con Freezer",
            capacidad: "300 Litros",
            eficiencia: "Clase A",
            color: "Plata / Silver",
            dimensiones: "165cm x 54cm x 62cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 2,
        nombre: "Heladera Samsung No Frost RT32K5070S8",
        categoria: "heladeras",
        precio: 985000,
        cuotas: "6 cuotas sin interés",
        envio: "Envio gratis",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/heladeras/samsung-no-frost.png",
        descripcion: "Tecnología No Frost avanzada que evita la formación de hielo. Cuenta con Twin Cooling Plus para mantener la humedad óptima de los alimentos.",
        especificaciones: {
            tipo: "No Frost Inverter",
            capacidad: "321 Litros",
            eficiencia: "Clase A+",
            color: "Acero Inoxidable",
            dimensiones: "171cm x 60cm x 67cm",
            garantia: "12 Meses (10 años en compresor)"
        }
    },
    {
        id: 3,
        nombre: "Heladera Gafa Cíclica HGF358AW White",
        categoria: "heladeras",
        precio: 490000,
        cuotas: "12 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/heladeras/gafa-ciclica.png",
        descripcion: "Un clásico confiable para el hogar. Su sistema cíclico garantiza un frío natural conservando mejor la humedad propia de los alimentos frescos.",
        especificaciones: {
            tipo: "Cíclica con Freezer",
            capacidad: "282 Litros",
            eficiencia: "Clase A",
            color: "Blanco",
            dimensiones: "143cm x 61cm x 67cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 4,
        nombre: "Heladera Whirlpool No Frost WRM56AK Evox",
        categoria: "heladeras",
        precio: 1250000,
        cuotas: "9 cuotas sin interés",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/heladeras/whirpool-no-frost.png",
        descripcion: "Gran capacidad y compartimentos inteligentes. Su tecnología Evox protege las puertas de marcas y óxido con una película impermeable.",
        especificaciones: {
            tipo: "No Frost de Alta Gama",
            capacidad: "462 Litros",
            eficiencia: "Clase A",
            color: "Platino Evox",
            dimensiones: "184cm x 70cm x 74cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 5,
        nombre: "Heladera Drean No Frost HDR420F00S",
        categoria: "heladeras",
        precio: 730000,
        cuotas: "12 cuotas sin interés",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/heladeras/drean-no-frost.png",
        descripcion: "Diseño ergonómico con freezer robusto. Incluye dispenser de agua integrado en la puerta y estantes de vidrio templado.",
        especificaciones: {
            tipo: "No Frost",
            capacidad: "397 Litros",
            eficiencia: "Clase A",
            color: "Steel",
            dimensiones: "189cm x 66cm x 76cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 6,
        nombre: "Heladera Philco Cíclica PHCT290X",
        categoria: "heladeras",
        precio: 460000,
        cuotas: "6 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/heladeras/philco-ciclica.png",
        descripcion: "Compacta y funcional, ideal para departamentos o espacios reducidos sin sacrificar potencia en el congelador.",
        especificaciones: {
            tipo: "Cíclica con Freezer",
            capacidad: "265 Litros",
            eficiencia: "Clase A",
            color: "Inoxidable",
            dimensiones: "151cm x 54cm x 60cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 7,
        nombre: "Heladera Brastemp Inverter BRM54",
        categoria: "heladeras",
        precio: 1100000,
        cuotas: "12 cuotas sin interés",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/heladeras/brastemp-inverter.png",
        descripcion: "Compartimento exclusivo para enfriamiento rápido de bebidas y panel táctil exterior para control total de temperatura.",
        especificaciones: {
            tipo: "No Frost Inverter",
            capacidad: "440 Litros",
            eficiencia: "Clase A++",
            color: "Acero Inoxidable",
            dimensiones: "185cm x 70cm x 75cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 8,
        nombre: "Heladera Siam No Frost HSI-FT13XD",
        categoria: "heladeras",
        precio: 680000,
        cuotas: "6 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/heladeras/siam-no-frost.png",
        descripcion: "Elegancia histórica y tecnología moderna unidas. Bajo nivel de ruido y enfriamiento uniforme en todas las bandejas.",
        especificaciones: {
            tipo: "No Frost",
            capacidad: "340 Litros",
            eficiencia: "Clase A",
            color: "Gris Plata",
            dimensiones: "173cm x 60cm x 68cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 9,
        nombre: "Heladera Columbia Cíclica HTD1001",
        categoria: "heladeras",
        precio: 415000,
        cuotas: "12 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/heladeras/columbia-ciclica.png",
        descripcion: "Sencilla, económica y de gran durabilidad. Estantes tipo rejilla removibles de fácil lavado e higiene.",
        especificaciones: {
            tipo: "Cíclica con Congelador",
            capacidad: "250 Litros",
            eficiencia: "Clase B",
            color: "Blanco",
            dimensiones: "145cm x 50cm x 54cm",
            garantia: "6 Meses Oficial"
        }
    },
    {
        id: 10,
        nombre: "Heladera Koh-i-noor Con Freezer KH43/7",
        categoria: "heladeras",
        precio: 890000,
        cuotas: "9 cuotas sin interés",
        envio: "Envio gratis",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/heladeras/koh-i-noor-freezer.png",
        descripcion: "Famosa por su potente motor y freezer de alta retención térmica capaz de conservar el frío por horas ante cortes de luz.",
        especificaciones: {
            tipo: "Cíclica de Alto Rendimiento",
            capacidad: "413 Litros",
            eficiencia: "Clase A",
            color: "Acero Prepintado",
            dimensiones: "175cm x 66cm x 65cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 11,
        nombre: "Lavarropas Automático Drean Next 7.10 Eco",
        categoria: "lavarropas",
        precio: 520000,
        cuotas: "12 cuotas sin interés",
        envio: "Envio gratis",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/lavarropas/drean-next.png",
        descripcion: "El lavarropas más vendido. Su motor Eco optimiza el consumo de agua y energía adaptando el lavado a la carga real.",
        especificaciones: {
            carga: "Frontal",
            capacidad: "7 Kg",
            centrifugado: "1000 RPM",
            programas: "23 Funciones",
            dimensiones: "85cm x 60cm x 55cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 12,
        nombre: "Lavarropas Samsung Inverter WW90A4144BX",
        categoria: "lavarropas",
        precio: 780000,
        cuotas: "6 cuotas sin interés",
        envio: "Envio gratis",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/lavarropas/samsung-inverter.png",
        descripcion: "Motor Digital Inverter silencioso y duradero. Lavado a vapor que elimina bacterias y alérgenos de las prendas.",
        especificaciones: {
            carga: "Frontal Inverter",
            capacidad: "9 Kg",
            centrifugado: "1400 RPM",
            programas: "14 Funciones",
            dimensiones: "85cm x 60cm x 60cm",
            garantia: "12 Meses (10 años en motor)"
        }
    },
    {
        id: 13,
        nombre: "Lavarropas Automático LG Direct Drive WM85WE6",
        categoria: "lavarropas",
        precio: 840000,
        cuotas: "12 cuotas sin interés",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/lavarropas/lg-direct-drive.png",
        descripcion: "Motor acoplado directo al tambor sin correas, reduciendo vibraciones y ruidos molestos durante la noche.",
        especificaciones: {
            carga: "Frontal Direct Drive",
            capacidad: "8.5 Kg",
            centrifugado: "1200 RPM",
            programas: "16 Funciones",
            dimensiones: "85cm x 60cm x 56cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 14,
        nombre: "Lavarropas Philco Carga Frontal PHLF080B",
        categoria: "lavarropas",
        precio: 495000,
        cuotas: "12 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/lavarropas/philco-carga-frontal.png",
        descripcion: "Sencillo y efectivo. Panel digital intuitivo y programa de lavado rápido de 15 minutos para ropa de poco uso.",
        especificaciones: {
            carga: "Frontal",
            capacidad: "8 Kg",
            centrifugado: "1000 RPM",
            programas: "15 Funciones",
            dimensiones: "85cm x 59.5cm x 56cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 15,
        nombre: "Lavarropas Whirlpool Inverter WWI16AB",
        categoria: "lavarropas",
        precio: 690000,
        cuotas: "9 cuotas sin interés",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/lavarropas/whirpool-inverter.png",
        descripcion: "Enorme capacidad de carga superior ideal para acolchados y sábanas familiares grandes con agitador central.",
        especificaciones: {
            carga: "Superior Inverter",
            capacidad: "16 Kg",
            centrifugado: "800 RPM",
            programas: "10 Funciones",
            dimensiones: "105cm x 64cm x 67cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 16,
        nombre: "Lavarropas Drean Concept 5.05 V1",
        categoria: "lavarropas",
        precio: 360000,
        cuotas: "6 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/lavarropas/drean-concept.png",
        descripcion: "El clásico de carga superior. Sistema de lavado oriental que cuida los tejidos delicados y permite añadir prendas durante el ciclo.",
        especificaciones: {
            carga: "Superior",
            capacidad: "5 Kg",
            centrifugado: "500 RPM",
            programas: "5 Funciones",
            dimensiones: "92cm x 54cm x 54cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 17,
        nombre: "Lavarropas Candy Smart Inverter CSO1410",
        categoria: "lavarropas",
        precio: 710000,
        cuotas: "12 cuotas sin interés",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/lavarropas/candy-smart-inverter.png",
        descripcion: "Conectividad Wi-Fi avanzada. Permite descargar ciclos nuevos desde el celular y chequear estadísticas de consumo.",
        especificaciones: {
            carga: "Frontal Inverter",
            capacidad: "10 Kg",
            centrifugado: "1400 RPM",
            programas: "16 + Descargables",
            dimensiones: "85cm x 60cm x 58cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 18,
        nombre: "Lavarropas Longvie Carga Frontal L616",
        categoria: "lavarropas",
        precio: 510000,
        cuotas: "6 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/lavarropas/longvie-carga-frontal.png",
        descripcion: "Estructura interna reforzada en acero galvanizado para garantizar una vida útil superior ante aguas duras.",
        especificaciones: {
            carga: "Frontal",
            capacidad: "6.5 Kg",
            centrifugado: "600 RPM",
            programas: "18 Funciones",
            dimensiones: "85cm x 60cm x 50cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 19,
        nombre: "Lavarropas Patrick Semiautomático LPK55",
        categoria: "lavarropas",
        precio: 210000,
        cuotas: "12 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/lavarropas/patrick-semiautomatico.png",
        descripcion: "Práctico, liviano y fácil de transportar. Ideal para lavados diarios rápidos que requieren control manual de desagote.",
        especificaciones: {
            carga: "Superior Semiautomático",
            capacidad: "5.5 Kg",
            centrifugado: "No posee",
            programas: "7 Funciones",
            dimensiones: "84cm x 51cm x 51cm",
            garantia: "6 Meses Oficial"
        }
    },
    {
        id: 20,
        nombre: "Lavarropas Electrolux Inverter EIFW700",
        categoria: "lavarropas",
        precio: 650000,
        cuotas: "12 cuotas sin interés",
        envio: "Envio gratis",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/lavarropas/electrolux-inverter.png",
        descripcion: "Diseño europeo sofisticado con tecnología inteligente que dosifica de manera exacta el suavizante y el jabón líquido.",
        especificaciones: {
            carga: "Frontal Inverter",
            capacidad: "7 Kg",
            centrifugado: "1200 RPM",
            programas: "12 Funciones",
            dimensiones: "85cm x 60cm x 57cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 21,
        nombre: "Microondas BGH Quick Chef 20 Litros",
        categoria: "microondas",
        precio: 165000,
        cuotas: "12 cuotas sin interés",
        envio: "Envio gratis",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/microondas/BGH-quick-chef.png",
        descripcion: "El aliado perfecto de la cocina rápida. Menús preprogramados para descongelar y cocinar los platos diarios más comunes.",
        especificaciones: {
            capacidad: "20 Litros",
            potencia: "700 W",
            control: "Digital con Reloj",
            grill: "No posee",
            dimensiones: "26cm x 44cm x 34cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 22,
        nombre: "Microondas Whirlpool Con Grill 25 Litros",
        categoria: "microondas",
        precio: 245000,
        cuotas: "6 cuotas sin interés",
        envio: "Envio gratis",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/microondas/whirpool-con-grill.png",
        descripcion: "Función de grill de alta potencia para dorar y gratinar pastas, carnes y tartas de forma crujiente.",
        especificaciones: {
            capacidad: "25 Litros",
            potencia: "900 W + Grill 1000W",
            control: "Digital Táctil",
            grill: "Cuarzo Integrado",
            dimensiones: "28cm x 48cm x 39cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 3,
        nombre: "Microondas Samsung Enlozado MS23K3515",
        categoria: "microondas",
        precio: 210000,
        cuotas: "12 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/microondas/samsung-con-interior-enlozado.png",
        descripcion: "Interior de cerámica enlozada altamente resistente a las ralladuras y súper fácil de limpiar sin frotar.",
        especificaciones: {
            capacidad: "23 Litros",
            potencia: "800 W",
            control: "Digital de Membrana",
            grill: "No posee",
            dimensiones: "27.5cm x 49cm x 37.4cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 24,
        nombre: "Microondas Philco Digital PMP20",
        categoria: "microondas",
        precio: 155000,
        cuotas: "6 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/microondas/philco-digital.png",
        descripcion: "Diseño de puerta espejada elegante que realza la estética de la mesada. Traba de seguridad para niños.",
        especificaciones: {
            capacidad: "20 Litros",
            potencia: "700 W",
            control: "Digital",
            grill: "No posee",
            dimensiones: "26cm x 45cm x 33cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 25,
        nombre: "Microondas Atma Digital MD1820N",
        categoria: "microondas",
        precio: 160000,
        cuotas: "12 cuotas sin interés",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/microondas/atma-digital.png",
        descripcion: "Económico y noble. Posee 8 programas automáticos y función ECO para apagar el display cuando no se usa.",
        especificaciones: {
            capacidad: "20 Litros",
            potencia: "700 W",
            control: "Digital",
            grill: "No posee",
            dimensiones: "25.8cm x 43.9cm x 34cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 26,
        nombre: "Microondas Sansei Mecánico SM120",
        categoria: "microondas",
        precio: 135000,
        cuotas: "6 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/microondas/sansei-mecanico.png",
        descripcion: "Control analógico por perillas mecánicas. Ideal para personas mayores por su extrema facilidad de operación.",
        especificaciones: {
            capacidad: "20 Litros",
            potencia: "700 W",
            control: "Analógico (Perillas)",
            grill: "No posee",
            dimensiones: "26cm x 44cm x 33cm",
            garantia: "6 Meses Oficial"
        }
    },
    {
        id: 27,
        nombre: "Microondas LG Smart Inverter MH6535",
        categoria: "microondas",
        precio: 340000,
        cuotas: "12 cuotas sin interés",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/microondas/LG-smart-inverter.png",
        descripcion: "Tecnología Smart Inverter que cocina y descongela de manera uniforme sin cocinar los bordes de la comida.",
        especificaciones: {
            capacidad: "25 Litros",
            potencia: "1000 W Inverter",
            control: "Panel Táctil Vidrio",
            grill: "Sí (Cuarzo)",
            dimensiones: "27.2cm x 47.6cm x 38.8cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 28,
        nombre: "Microondas Electrolux Digital EMDX20",
        categoria: "microondas",
        precio: 175000,
        cuotas: "6 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/microondas/electrolux-digital.png",
        descripcion: "Función exclusiva 'Elimina Olores' mediante un sistema de ventilación forzada que mantiene el interior fresco.",
        especificaciones: {
            capacidad: "20 Litros",
            potencia: "700 W",
            control: "Digital",
            grill: "No posee",
            dimensiones: "26.2cm x 45.2cm x 35cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 29,
        nombre: "Microondas Candy Con Grill CMXG20",
        categoria: "microondas",
        precio: 215000,
        cuotas: "12 cuotas sin interés",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/microondas/candy-con-grill.png",
        descripcion: "Estilo retro europeo combinado con tecnología digital. Permite silenciar las alarmas sonoras de finalización.",
        especificaciones: {
            capacidad: "20 Litros",
            potencia: "800 W + Grill",
            control: "Digital con Perilla JOG",
            grill: "Sí",
            dimensiones: "25.9cm x 44cm x 35.7cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 30,
        nombre: "Microondas Noblex Digital MN20",
        categoria: "microondas",
        precio: 158000,
        cuotas: "6 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/microondas/noblex-digital.png",
        descripcion: "Excelente relación precio-calidad de fabricación nacional. Cuenta con descongelamiento automático por peso del alimento.",
        especificaciones: {
            capacidad: "20 Litros",
            potencia: "700 W",
            control: "Digital",
            grill: "No posee",
            dimensiones: "26cm x 44cm x 34cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 31,
        nombre: "Aire Philco Split Frío/Calor 3000F",
        categoria: "aires",
        precio: 670000,
        cuotas: "12 cuotas sin interés",
        envio: "Envio gratis",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/aires/philco-split-frio.png",
        descripcion: "Ideal para dormitorios o livings medianos. Su función de deshumidificación ayuda a controlar el clima del hogar.",
        especificaciones: {
            frigorias: "3000 Frigorías / 3500W",
            tecnologia: "On-Off Tradicional",
            modo: "Frío / Calor",
            gas: "Ecológico R410A",
            dimensiones: "28.5cm x 75cm x 20cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 32,
        nombre: "Aire BGH Silent Air Inverter 3500F",
        categoria: "aires",
        precio: 920000,
        cuotas: "6 cuotas sin interés",
        envio: "Envio gratis",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/aires/BGH-silent-air.png",
        descripcion: "Ahorra hasta un 50% de energía eléctrica gracias a su motor inverter lineal. Ultrasilencioso para un descanso perfecto.",
        especificaciones: {
            frigorias: "3500 Frigorías / 4100W",
            tecnologia: "Full Inverter",
            modo: "Frío / Calor",
            gas: "Ecológico R410A",
            dimensiones: "29cm x 80cm x 22cm",
            garantia: "24 Meses Oficial"
        }
    },
    {
        id: 33,
        nombre: "Aire Acondicionado Sansei Split 2300W",
        categoria: "aires",
        precio: 540000,
        cuotas: "12 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/aires/sansei-split-frio.png",
        descripcion: "Filtros lavables de alta densidad que retienen las partículas de polvo del ambiente de forma eficiente.",
        especificaciones: {
            frigorias: "2000 Frigorías / 2300W",
            tecnologia: "On-Off",
            modo: "Frío / Calor",
            gas: "R410A",
            dimensiones: "25cm x 70cm x 19cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 34,
        nombre: "Aire Surrey Inverter 553AIQ",
        categoria: "aires",
        precio: 1150000,
        cuotas: "12 cuotas sin interés",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/aires/surrey-digital-inverter.png",
        descripcion: "Calidad profesional americana. Estructura exterior tratada contra la corrosión salina y climas de alta humedad.",
        especificaciones: {
            frigorias: "4500 Frigorías / 5200W",
            tecnologia: "Smart Inverter",
            modo: "Frío / Calor",
            gas: "R410A",
            dimensiones: "32cm x 96cm x 23cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 35,
        nombre: "Aire LG Dual Inverter S4-W12",
        categoria: "aires",
        precio: 980000,
        cuotas: "9 cuotas sin interés",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/aires/lg-dual-inverter.png",
        descripcion: "Compresor Dual Inverter con 10 años de garantía oficial. Enfría un 40% más rápido que los equipos estándar.",
        especificaciones: {
            frigorias: "3000 Frigorías / 3500W",
            tecnologia: "Dual Inverter",
            modo: "Frío / Calor",
            gas: "R410A",
            dimensiones: "30cm x 83cm x 19cm",
            garantia: "12 Meses (10 años compresor)"
        }
    },
    {
        id: 36,
        nombre: "Aire Samsung Digital Inverter AR12",
        categoria: "aires",
        precio: 940000,
        cuotas: "6 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/aires/samsung-digital-inverter.png",
        descripcion: "Diseño con filtro triple protector de aire y modo Fast Cooling para aclimatar habitaciones en minutos.",
        especificaciones: {
            frigorias: "3000 Frigorías",
            tecnologia: "Digital Inverter 8-Polos",
            modo: "Frío / Calor",
            gas: "R410A",
            dimensiones: "29.7cm x 80.2cm x 18.9cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 37,
        nombre: "Aire Electrolux Eco Inverter",
        categoria: "aires",
        precio: 890000,
        cuotas: "12 cuotas sin interés",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/aires/electrolux-digital.png",
        descripcion: "Función 'Siga Me' que utiliza un sensor en el control remoto para regular la temperatura exacta donde te encuentres.",
        especificaciones: {
            frigorias: "3000 Frigorías",
            tecnologia: "Inverter",
            modo: "Frío / Calor",
            gas: "R410A",
            dimensiones: "28cm x 80cm x 21cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 38,
        nombre: "Aire Midea Smart Inverter",
        categoria: "aires",
        precio: 850000,
        cuotas: "6 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/aires/midea-smart.png",
        descripcion: "Incluye kit Wi-Fi de fábrica para encender, apagar o programar el aire desde el celular aun estando fuera de casa.",
        especificaciones: {
            frigorias: "2900 Frigorías",
            tecnologia: "Inverter Smart",
            modo: "Frío / Calor",
            gas: "R410A",
            dimensiones: "29cm x 79cm x 20cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 39,
        nombre: "Aire Noblex Split Frío/Calor",
        categoria: "aires",
        precio: 620000,
        cuotas: "12 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/aires/noblex-split-frio.png",
        descripcion: "Bajo consumo eléctrico en modo calor, posicionándose como una excelente alternativa a la calefacción a gas.",
        especificaciones: {
            frigorias: "2700 Frigorías",
            tecnologia: "On-Off",
            modo: "Frío / Calor",
            gas: "R410A",
            dimensiones: "27cm x 75cm x 20cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 40,
        nombre: "Aire Carrier Split XPower",
        categoria: "aires",
        precio: 1390000,
        cuotas: "12 cuotas sin interés",
        envio: "Envio gratis",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/aires/carrier-split.png",
        descripcion: "Potencia masiva para ambientes grandes o locales comerciales. Distribución de aire en 4 direcciones.",
        especificaciones: {
            frigorias: "5000 Frigorías",
            tecnologia: "Inverter de Alta Potencia",
            modo: "Frío / Calor",
            gas: "R410A",
            dimensiones: "33cm x 108cm x 23cm",
            garantia: "36 Meses Oficial"
        }
    },
    {
        id: 41,
        nombre: "Cocina Escorial Candor 4 Hornallas",
        categoria: "cocinas",
        precio: 310000,
        cuotas: "12 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/cocinas/cocina-escorial.png",
        descripcion: "Económica, duradera y robusta. Quemadores de aluminio con tapas de acero enlozadas de fácil remoción.",
        especificaciones: {
            tipo: "Gas Natural o Envasado",
            material: "Chapa Enlozada Blanca",
            hornallas: "4 con válvulas de seguridad",
            horno: "Limpia fácil con tres niveles",
            dimensiones: "85cm x 51cm x 60cm",
            garantia: "6 Meses Oficial"
        }
    },
    {
        id: 42,
        nombre: "Cocina Florencia Tech-Edition Acero",
        categoria: "cocinas",
        precio: 550000,
        cuotas: "12 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/cocinas/florencia-tech-edition.png",
        descripcion: "Fusing de diseño de vanguardia y acero inoxidable. Puerta de horno con doble vidrio templado hermético seguro al tacto.",
        especificaciones: {
            tipo: "Multigas Premium",
            material: "Acero Inoxidable Esmerilado",
            hornallas: "4 de alta eficiencia",
            horno: "Con luz interior y encendido",
            dimensiones: "85cm x 55cm x 60cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 43,
        nombre: "Cocina Patrick Cristian 4 Hornallas PK5500",
        categoria: "cocinas",
        precio: 460000,
        cuotas: "12 cuotas sin interés",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/cocinas/cocina-patric-cristian.png",
        descripcion: "Excelente aislamiento térmico perimetral que evita el calentamiento de los muebles de cocina adyacentes.",
        especificaciones: {
            tipo: "Multigas",
            material: "Gris Plata Steel",
            hornallas: "4 quemadores potentes",
            horno: "Visor panorámico doble vidrio",
            dimensiones: "85cm x 55cm x 62cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 44,
        nombre: "Cocina Longvie Standard 13501X",
        categoria: "cocinas",
        precio: 690000,
        cuotas: "6 cuotas sin interés",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/cocinas/cocina-longvie-standard.png",
        descripcion: "Termostato de variación continua en el horno para regular de manera exacta la cocción de tortas y panificados.",
        especificaciones: {
            tipo: "Gas con encendido electrónico",
            material: "Acero Inoxidable",
            hornallas: "4 con rejas de hierro fundido",
            horno: "Con Timer y Grill",
            dimensiones: "86cm x 56cm x 60cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 45,
        nombre: "Cocina Whirpool Inox Con Grill WFX56",
        categoria: "cocinas",
        precio: 820000,
        cuotas: "9 cuotas sin interés",
        envio: "Envio gratis",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/cocinas/whirpool-inox.png",
        descripcion: "Diseño industrial italiano para el hogar. Cuenta con hornalla central de triple llama (Wok) para preparaciones rápidas.",
        especificaciones: {
            tipo: "Multigas de Alta Gama",
            material: "Acero y Vidrio Templado",
            hornallas: "4 + Quemador Wok central",
            horno: "Grill eléctrico para dorar",
            dimensiones: "86cm x 56cm x 65cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 46,
        nombre: "Cocina Domec Tradicional Volcán",
        categoria: "cocinas",
        precio: 510000,
        cuotas: "6 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/cocinas/domec-tradicional.png",
        descripcion: "Estructura ultra pesada de gran durabilidad. Válvulas de seguridad incorporadas en las 4 hornallas y el horno.",
        especificaciones: {
            tipo: "Gas Natural",
            material: "Enlozado Marrón Tradicional",
            hornallas: "4 reforzadas",
            horno: "Sistema autolimpiante",
            dimensiones: "85cm x 50cm x 60cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 47,
        nombre: "Cocina Volcán 4 Hornallas Enlozada",
        categoria: "cocinas",
        precio: 340000,
        cuotas: "12 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/cocinas/volcan.png",
        descripcion: "Clásica y noble, de mantenimiento casi nulo. Horno con tres niveles de estantes y piso de ladrillos refractarios.",
        especificaciones: {
            tipo: "Multigas",
            material: "Enlozado Negro Mate",
            hornallas: "4 con tapas de acero",
            horno: "De calor envolvente directo",
            dimensiones: "85cm x 50cm x 55cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 48,
        nombre: "Cocina Martiri Lujo 4 Hornallas",
        categoria: "cocinas",
        precio: 295000,
        cuotas: "12 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/cocinas/maritiri.png",
        descripcion: "Ideal para complejos de departamentos o alquileres debido a su excelente durabilidad mecánica frente al maltrato diario.",
        especificaciones: {
            tipo: "Gas Envasado / Natural",
            material: "Frente de Acero / Laterales Blancos",
            hornallas: "4 estándar",
            horno: "Con visor de vidrio central",
            dimensiones: "85cm x 51cm x 53cm",
            garantia: "6 Meses Oficial"
        }
    },
    {
        id: 49,
        nombre: "Cocina Aurora Argenta Multigas",
        categoria: "cocinas",
        precio: 440000,
        cuotas: "6 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/cocinas/aurora-argenta.png",
        descripcion: "Encendido a una sola mano en todas las perillas. Rejas superiores de varilla gruesa entrelazada antiderrames.",
        especificaciones: {
            tipo: "Multigas asistida",
            material: "Acero Satinado",
            hornallas: "4 quemadores compactos",
            horno: "Interior conlozación antiadherente",
            dimensiones: "85cm x 54cm x 60cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 50,
        nombre: "Cocina Morelli Vintage 600",
        categoria: "cocinas",
        precio: 950000,
        cuotas: "12 cuotas sin interés",
        envio: "Envio gratis",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/cocinas/morelli.png",
        descripcion: "Estilo semi-industrial con estética retro de colección. Mecheros de fundición de alta potencia calórica para gastronomía.",
        especificaciones: {
            tipo: "Semi-Industrial de Lujo",
            material: "Acero e Hierro Fundido Rojo/Inox",
            hornallas: "4 de alta potencia gastronómica",
            horno: "Piso refractario de alta retención",
            dimensiones: "87cm x 60cm x 65cm",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 51,
        nombre: "Notebook Lenovo IdeaPad 320 Intel i5",
        categoria: "informatica",
        precio: 899999,
        cuotas: "12 cuotas sin interés",
        envio: "Envio gratis",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/informaticos/lenovo-ideapad.png",
        descripcion: "Ideal para estudiantes de desarrollo de software y multitarea. Estructura delgada reforzada con teclado numérico extendido.",
        especificaciones: {
            procesador: "Intel Core i5-7200U",
            ram: "20 GB DDR4 Integrada",
            almacenamiento: "500 GB SSD de alta velocidad",
            pantalla: "15.6 pulgadas HD Antirreflejo",
            sistema: "Windows 11 Home Oficial",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 52,
        nombre: "Notebook ASUS Vivobook AMD Ryzen 5",
        categoria: "informatica",
        precio: 950000,
        cuotas: "6 cuotas sin interés",
        envio: "Envio gratis",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/informaticos/asus-vivobook.png",
        descripcion: "Pantalla NanoEdge de bordes ultra finos. Rendimiento gráfico integrado Radeon superior para diseño multimedia fluido.",
        especificaciones: {
            procesador: "AMD Ryzen 5 5500U",
            ram: "16 GB DDR4 Dual Channel",
            almacenamiento: "512 GB NVMe PCIe M.2",
            pantalla: "15.6 pulgadas Full HD IPS",
            sistema: "FreeDOS (Apto Windows 11)",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 53,
        nombre: "Notebook HP Pavilion 15 Intel i7",
        categoria: "informatica",
        precio: 1450000,
        cuotas: "12 cuotas sin interés",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/informaticos/HP-Pavilion.png",
        descripcion: "Potencia ejecutiva pura con chasis de aluminio pulido. Teclado retroiluminado ideal para programar de noche.",
        especificaciones: {
            procesador: "Intel Core i7-1255U",
            ram: "16 GB DDR4 3200Mhz",
            almacenamiento: "1 TB SSD NVMe M.2",
            pantalla: "15.6 Pulgadas FHD IPS Táctil",
            sistema: "Windows 11 Pro",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 54,
        nombre: "Monitor Gamer Samsung Odyssey G3 24\"",
        categoria: "informatica",
        precio: 390000,
        cuotas: "6 cuotas sin interés",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/informaticos/samsung-odyssey.png",
        descripcion: "Diseño sin bordes con tasa de refresco ultra rápida que elimina el delay. Base pivotante regulable en altura.",
        especificaciones: {
            pantalla: "24 Pulgadas Panel VA Plano",
            refresco: "144 Hz reales",
            respuesta: "1 ms (MPRT)",
            tecnologia: "AMD FreeSync Premium",
            conexiones: "DisplayPort 1.2 / HDMI 1.4",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 55,
        nombre: "Monitor LG UltraWide Pro 29\"",
        categoria: "informatica",
        precio: 480000,
        cuotas: "9 cuotas sin interés",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/informaticos/lg-monitor.png",
        descripcion: "Formato expandido 21:9 ideal para programadores, permitiendo tener el editor de código y el navegador abiertos en paralelo.",
        especificaciones: {
            pantalla: "29 Pulgadas IPS UltraWide",
            resolucion: "WFHD (2560 x 1080)",
            color: "sRGB 99% Profesional",
            refresco: "75 Hz",
            caracteristica: "HDR10 / Screen Split por Software",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 56,
        nombre: "Impresora Multifunción Epson EcoTank L3250",
        categoria: "informatica",
        precio: 360000,
        cuotas: "6 cuotas sin interés",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/informaticos/epson-ecotank.png",
        descripcion: "Sistema continuo original de botellas de tinta de altísimo rendimiento y ultra bajo costo de impresión por página.",
        especificaciones: {
            tipo: "Multifunción (Escáner/Copia)",
            conectividad: "Wi-Fi Direct / App Epson Smart",
            rendimiento: "Hasta 4500 páginas en negro",
            velocidad: "33 ppm en texto negro",
            insumos: "Botellas Epson Serie T544",
            garantia: "12 Meses (Extensible a 24)"
        }
    },
    {
        id: 57,
        nombre: "Teclado Mecánico Redragon Mitra K551",
        categoria: "informatica",
        precio: 85000,
        cuotas: "3 cuotas sin interés",
        envio: "Retiro en sucursal",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/informaticos/teclado-mitra.png",
        descripcion: "Estructura de aluminio ABS reforzado con switches mecánicos Outemu Blue de excelente respuesta táctil y sonora al escribir.",
        especificaciones: {
            layout: "Español Latino (Con Ñ)",
            switches: "Outemu Blue (Intercambiables)",
            iluminacion: "RGB Chroma configurable",
            conexion: "Cable USB Mallado con filtro",
            construccion: "A prueba de salpicaduras",
            garantia: "6 Meses Oficial"
        }
    },
    {
        id: 58,
        nombre: "Mouse Logitech G Pro Wireless",
        categoria: "informatica",
        precio: 140000,
        cuotas: "6 cuotas sin interés",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/informaticos/logitech-mouse.png",
        descripcion: "El mouse inalámbrico competitivo de eSports más liviano del mundo. Precisión píxel por píxel libre de latencia.",
        especificaciones: {
            sensor: "HERO 25K de alta precisión",
            peso: "80 Gramos Ultra Liviano",
            autonomia: "Hasta 60 horas continuas",
            resolucion: "100 a 25.600 DPI",
            botones: "4 a 8 programables (Magnéticos)",
            garantia: "24 Meses Oficial"
        }
    },
    {
        id: 59,
        nombre: "Auriculares HyperX Cloud Flight Wireless",
        categoria: "informatica",
        precio: 165000,
        cuotas: "6 cuotas sin interés",
        envio: "Envio gratis",
        destacado: false,
        cantidad: 1,
        imagen: "Images/Products/informaticos/cloud-flight.png",
        descripcion: "Auriculares inalámbricos de diadema cerrada con almohadillas de espuma viscoelástica con memoria exclusivas de HyperX.",
        especificaciones: {
            conexion: "Inalámbrica 2.4 GHz dedicada",
            autonomia: "Hasta 30 horas de batería",
            microfono: "Cancelación de ruido extraíble",
            copas: "Rotativas de 90 grados con LED",
            compatibilidad: "PC / PS4 / PS5",
            garantia: "12 Meses Oficial"
        }
    },
    {
        id: 60,
        nombre: "Tablet Lenovo Tab P11 Pro",
        categoria: "informatica",
        precio: 580000,
        cuotas: "12 cuotas sin interés",
        envio: "Envio gratis",
        destacado: true,
        cantidad: 1,
        imagen: "Images/Products/informaticos/tab-p11.png",
        descripcion: "Pantalla cinematográfica de alta fidelidad ideal para consumo multimedia y diseño digital portátil con 4 parlantes JBL.",
        especificaciones: {
            pantalla: "11.5 Pulgadas OLED 2K",
            procesador: "Snapdragon 730G",
            memoria: "128 GB Almacenamiento / 6GB RAM",
            bateria: "8600 mAh con carga rápida",
            material: "Chasis completo de aluminio unibody",
            garantia: "12 Meses Oficial"
        }
    }
];