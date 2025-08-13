import { connect, getDB } from "./config.js";

async function seed() {
  const ingredientes = [
    {"_id": "64f0b1c8f1d2c4b3a8e4e5d9", "id": 10001, "nombre": "Chocolate"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5da", "id": 10002, "nombre": "Fresas"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "id": 10003, "nombre": "Azúcar"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "id": 10004, "nombre": "Harina"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5dd", "id": 10005, "nombre": "Leche"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5de", "id": 10006, "nombre": "Mantequilla"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5df", "id": 10007, "nombre": "Huevos"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5e0", "id": 10008, "nombre": "Vainilla"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5e1", "id": 10009, "nombre": "Sal"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5e2", "id": 10010, "nombre": "Levadura"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5e3", "id": 10011, "nombre": "Nata"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5e4", "id": 10012, "nombre": "Miel"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5e5", "id": 10013, "nombre": "Canela"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5e6", "id": 10014, "nombre": "Frambuesas"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5e7", "id": 10015, "nombre": "Arándanos"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5e8", "id": 10016, "nombre": "Limón"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5e9", "id": 10017, "nombre": "Nuez Moscada"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5ea", "id": 10018, "nombre": "Cacao"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5eb", "id": 10019, "nombre": "Almendras"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5ec", "id": 10020, "nombre": "Avellanas"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5ed", "id": 10021, "nombre": "Naranja"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5ee", "id": 10022, "nombre": "Manzana"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5ef", "id": 10023, "nombre": "Plátano"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5f0", "id": 10024, "nombre": "Coco"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5f1", "id": 10025, "nombre": "Yogur"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5f2", "id": 10026, "nombre": "Café"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5f3", "id": 10027, "nombre": "Caramelo"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5f4", "id": 10028, "nombre": "Menta"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5f5", "id": 10029, "nombre": "Clavo"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5f6", "id": 10030, "nombre": "Jengibre"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5f7", "id": 10031, "nombre": "Pasas"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5f8", "id": 10032, "nombre": "Dátiles"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5f9", "id": 10033, "nombre": "Nueces"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5fa", "id": 10034, "nombre": "Pistachos"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5fb", "id": 10035, "nombre": "Queso Crema"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5fc", "id": 10036, "nombre": "Lima"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5fd", "id": 10037, "nombre": "Granadina"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5fe", "id": 10038, "nombre": "Ron"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5ff", "id": 10039, "nombre": "Crema de Cacahuete"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e600", "id": 10040, "nombre": "Sirope de Arce"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e601", "id": 10041, "nombre": "Anís"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e602", "id": 10042, "nombre": "Cardamomo"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e603", "id": 10043, "nombre": "Chispas de Chocolate"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e604", "id": 10044, "nombre": "Mermelada"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e605", "id": 10045, "nombre": "Galletas"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e606", "id": 10046, "nombre": "Cerezas"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e607", "id": 10047, "nombre": "Vino Blanco"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e608", "id": 10048, "nombre": "Masa Filo"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e609", "id": 10049, "nombre": "Agua de Azahar"},
    {"_id": "64f0b1c8f1d2c4b3a8e4e60a", "id": 10050, "nombre": "Azafrán"}
  ];
  
  await connect();
  await getDB().collection("ingredientes").deleteMany();
  await getDB().collection("ingredientes").insertMany(ingredientes);



  const recetas = [
    {"_id": "64f0b1c8f1d2c4b3a8e4e5d6", "id": 1001, "nombre": "Pastel de Chocolate", "descripcion": "Delicioso pastel de chocolate con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5d9", "nombre": "Chocolate"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "nombre": "Harina"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5d7", "id": 1002, "nombre": "Tarta de Fresa", "descripcion": "Deliciosa tarta de fresa con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5da", "nombre": "Fresas"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e3", "nombre": "Nata"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "nombre": "Harina"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e5d8", "id": 1003, "nombre": "Galletas de Avena", "descripcion": "Deliciosas galletas de avena con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "nombre": "Harina"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5de", "nombre": "Mantequilla"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e60b", "id": 1004, "nombre": "Flan de Vainilla", "descripcion": "Delicioso flan de vainilla con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dd", "nombre": "Leche"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5df", "nombre": "Huevos"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e0", "nombre": "Vainilla"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e60c", "id": 1005, "nombre": "Tiramisú", "descripcion": "Delicioso tiramisú con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5f2", "nombre": "Café"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5fb", "nombre": "Queso Crema"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e60d", "id": 1006, "nombre": "Brownie", "descripcion": "Delicioso brownie con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5d9", "nombre": "Chocolate"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5de", "nombre": "Mantequilla"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "nombre": "Harina"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e60e", "id": 1007, "nombre": "Muffins de Arándanos", "descripcion": "Deliciosos muffins de arándanos con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e7", "nombre": "Arándanos"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "nombre": "Harina"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e60f", "id": 1008, "nombre": "Tarta de Limón", "descripcion": "Deliciosa tarta de limón con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e8", "nombre": "Limón"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "nombre": "Harina"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5de", "nombre": "Mantequilla"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e610", "id": 1009, "nombre": "Churros", "descripcion": "Deliciosos churros con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "nombre": "Harina"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e1", "nombre": "Sal"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e611", "id": 1010, "nombre": "Pudin de Pan", "descripcion": "Delicioso pudin de pan con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dd", "nombre": "Leche"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5df", "nombre": "Huevos"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e612", "id": 1011, "nombre": "Pastel de Chocolate 2", "descripcion": "Delicioso pastel de chocolate con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5d9", "nombre": "Chocolate"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e0", "nombre": "Vainilla"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e613", "id": 1012, "nombre": "Tarta de Fresa 2", "descripcion": "Deliciosa tarta de fresa con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5da", "nombre": "Fresas"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e3", "nombre": "Nata"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e4", "nombre": "Miel"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e614", "id": 1013, "nombre": "Galletas de Avena 2", "descripcion": "Deliciosas galletas de avena con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "nombre": "Harina"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5eb", "nombre": "Almendras"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e615", "id": 1014, "nombre": "Flan de Vainilla 2", "descripcion": "Delicioso flan de vainilla con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dd", "nombre": "Leche"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5df", "nombre": "Huevos"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e0", "nombre": "Vainilla"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e616", "id": 1015, "nombre": "Tiramisú 2", "descripcion": "Delicioso tiramisú con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5f2", "nombre": "Café"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5fb", "nombre": "Queso Crema"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e0", "nombre": "Vainilla"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e617", "id": 1016, "nombre": "Brownie 2", "descripcion": "Delicioso brownie con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5d9", "nombre": "Chocolate"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5ea", "nombre": "Cacao"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e618", "id": 1017, "nombre": "Muffins de Arándanos 2", "descripcion": "Deliciosos muffins de arándanos con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e7", "nombre": "Arándanos"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "nombre": "Harina"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e2", "nombre": "Levadura"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e619", "id": 1018, "nombre": "Tarta de Limón 2", "descripcion": "Deliciosa tarta de limón con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e8", "nombre": "Limón"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e3", "nombre": "Nata"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e61a", "id": 1019, "nombre": "Churros 2", "descripcion": "Deliciosos churros con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "nombre": "Harina"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e1", "nombre": "Sal"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e5", "nombre": "Canela"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e61b", "id": 1020, "nombre": "Pudin de Pan 2", "descripcion": "Delicioso pudin de pan con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dd", "nombre": "Leche"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5df", "nombre": "Huevos"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e4", "nombre": "Miel"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e61c", "id": 1021, "nombre": "Pastel de Chocolate 3", "descripcion": "Delicioso pastel de chocolate con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5d9", "nombre": "Chocolate"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5ec", "nombre": "Avellanas"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e61d", "id": 1022, "nombre": "Tarta de Fresa 3", "descripcion": "Deliciosa tarta de fresa con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5da", "nombre": "Fresas"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e3", "nombre": "Nata"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e6", "nombre": "Frambuesas"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e61e", "id": 1023, "nombre": "Galletas de Avena 3", "descripcion": "Deliciosas galletas de avena con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "nombre": "Harina"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5f7", "nombre": "Pasas"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e61f", "id": 1024, "nombre": "Flan de Vainilla 3", "descripcion": "Delicioso flan de vainilla con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dd", "nombre": "Leche"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5df", "nombre": "Huevos"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e0", "nombre": "Vainilla"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5f3", "nombre": "Caramelo"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e620", "id": 1025, "nombre": "Tiramisú 3", "descripcion": "Delicioso tiramisú con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5f2", "nombre": "Café"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5fb", "nombre": "Queso Crema"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5ea", "nombre": "Cacao"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e621", "id": 1026, "nombre": "Brownie 3", "descripcion": "Delicioso brownie con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5d9", "nombre": "Chocolate"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5de", "nombre": "Mantequilla"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5f9", "nombre": "Nueces"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e622", "id": 1027, "nombre": "Muffins de Arándanos 3", "descripcion": "Deliciosos muffins de arándanos con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e7", "nombre": "Arándanos"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "nombre": "Harina"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e2", "nombre": "Levadura"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e623", "id": 1028, "nombre": "Tarta de Limón 3", "descripcion": "Deliciosa tarta de limón con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e8", "nombre": "Limón"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5fc", "nombre": "Lima"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e624", "id": 1029, "nombre": "Churros 3", "descripcion": "Deliciosos churros con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "nombre": "Harina"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e1", "nombre": "Sal"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e5", "nombre": "Canela"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e625", "id": 1030, "nombre": "Pudin de Pan 3", "descripcion": "Delicioso pudin de pan con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dd", "nombre": "Leche"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5df", "nombre": "Huevos"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5f8", "nombre": "Dátiles"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e626", "id": 1031, "nombre": "Pastel de Chocolate 4", "descripcion": "Delicioso pastel de chocolate con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5d9", "nombre": "Chocolate"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e0", "nombre": "Vainilla"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e627", "id": 1032, "nombre": "Tarta de Fresa 4", "descripcion": "Deliciosa tarta de fresa con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5da", "nombre": "Fresas"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e3", "nombre": "Nata"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "nombre": "Harina"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e628", "id": 1033, "nombre": "Galletas de Avena 4", "descripcion": "Deliciosas galletas de avena con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "nombre": "Harina"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5de", "nombre": "Mantequilla"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5fa", "nombre": "Pistachos"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e629", "id": 1034, "nombre": "Flan de Vainilla 4", "descripcion": "Delicioso flan de vainilla con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dd", "nombre": "Leche"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5df", "nombre": "Huevos"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e0", "nombre": "Vainilla"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5f3", "nombre": "Caramelo"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e62a", "id": 1035, "nombre": "Tiramisú 4", "descripcion": "Delicioso tiramisú con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5f2", "nombre": "Café"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5fb", "nombre": "Queso Crema"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5ea", "nombre": "Cacao"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e62b", "id": 1036, "nombre": "Brownie 4", "descripcion": "Delicioso brownie con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5d9", "nombre": "Chocolate"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5de", "nombre": "Mantequilla"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e62c", "id": 1037, "nombre": "Muffins de Arándanos 4", "descripcion": "Deliciosos muffins de arándanos con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e7", "nombre": "Arándanos"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "nombre": "Harina"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e2", "nombre": "Levadura"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e62d", "id": 1038, "nombre": "Tarta de Limón 4", "descripcion": "Deliciosa tarta de limón con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e8", "nombre": "Limón"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5de", "nombre": "Mantequilla"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e62e", "id": 1039, "nombre": "Churros 4", "descripcion": "Deliciosos churros con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "nombre": "Harina"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e1", "nombre": "Sal"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e5", "nombre": "Canela"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e62f", "id": 1040, "nombre": "Pudin de Pan 4", "descripcion": "Delicioso pudin de pan con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dd", "nombre": "Leche"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5df", "nombre": "Huevos"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e4", "nombre": "Miel"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e630", "id": 1041, "nombre": "Pastel de Chocolate 5", "descripcion": "Delicioso pastel de chocolate con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5d9", "nombre": "Chocolate"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e0", "nombre": "Vainilla"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "nombre": "Harina"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e631", "id": 1042, "nombre": "Tarta de Fresa 5", "descripcion": "Deliciosa tarta de fresa con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5da", "nombre": "Fresas"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e3", "nombre": "Nata"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e6", "nombre": "Frambuesas"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e632", "id": 1043, "nombre": "Galletas de Avena 5", "descripcion": "Deliciosas galletas de avena con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "nombre": "Harina"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5de", "nombre": "Mantequilla"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5f7", "nombre": "Pasas"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e633", "id": 1044, "nombre": "Flan de Vainilla 5", "descripcion": "Delicioso flan de vainilla con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dd", "nombre": "Leche"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5df", "nombre": "Huevos"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e0", "nombre": "Vainilla"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e634", "id": 1045, "nombre": "Tiramisú 5", "descripcion": "Delicioso tiramisú con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5f2", "nombre": "Café"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5fb", "nombre": "Queso Crema"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5ea", "nombre": "Cacao"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e635", "id": 1046, "nombre": "Brownie 5", "descripcion": "Delicioso brownie con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5d9", "nombre": "Chocolate"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5de", "nombre": "Mantequilla"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5f9", "nombre": "Nueces"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e636", "id": 1047, "nombre": "Muffins de Arándanos 5", "descripcion": "Deliciosos muffins de arándanos con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e7", "nombre": "Arándanos"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "nombre": "Harina"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e2", "nombre": "Levadura"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e637", "id": 1048, "nombre": "Tarta de Limón 5", "descripcion": "Deliciosa tarta de limón con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e8", "nombre": "Limón"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5db", "nombre": "Azúcar"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5fc", "nombre": "Lima"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5de", "nombre": "Mantequilla"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e638", "id": 1049, "nombre": "Churros 5", "descripcion": "Deliciosos churros con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dc", "nombre": "Harina"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e1", "nombre": "Sal"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e5", "nombre": "Canela"}
    ]},
    {"_id": "64f0b1c8f1d2c4b3a8e4e639", "id": 1050, "nombre": "Pudin de Pan 5", "descripcion": "Delicioso pudin de pan con ingredientes frescos", "ingredientes": [
      {"_id": "64f0b1c8f1d2c4b3a8e4e5dd", "nombre": "Leche"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5df", "nombre": "Huevos"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5e4", "nombre": "Miel"},
      {"_id": "64f0b1c8f1d2c4b3a8e4e5f8", "nombre": "Dátiles"}
    ]}
  ];


  await connect();
  await getDB().collection("recetas").deleteMany();
  await getDB().collection("recetas").insertMany(recetas);





  const usuarios = [
    {"id": 101, "nombre": "Usuario 1", "email": "usuario1@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e5d6", "64f0b1c8f1d2c4b3a8e4e5d7"]},
    {"id": 102, "nombre": "Usuario 2", "email": "usuario2@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e5d8"]},
    {"id": 103, "nombre": "Usuario 3", "email": "usuario3@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e60b", "64f0b1c8f1d2c4b3a8e4e60c", "64f0b1c8f1d2c4b3a8e4e60d"]},
    {"id": 104, "nombre": "Usuario 4", "email": "usuario4@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e60e"]},
    {"id": 105, "nombre": "Usuario 5", "email": "usuario5@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e60f", "64f0b1c8f1d2c4b3a8e4e610"]},
    {"id": 106, "nombre": "Usuario 6", "email": "usuario6@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e611"]},
    {"id": 107, "nombre": "Usuario 7", "email": "usuario7@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e612", "64f0b1c8f1d2c4b3a8e4e613", "64f0b1c8f1d2c4b3a8e4e614"]},
    {"id": 108, "nombre": "Usuario 8", "email": "usuario8@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e615"]},
    {"id": 109, "nombre": "Usuario 9", "email": "usuario9@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e616", "64f0b1c8f1d2c4b3a8e4e617"]},
    {"id": 110, "nombre": "Usuario 10", "email": "usuario10@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e618"]},
    {"id": 111, "nombre": "Usuario 11", "email": "usuario11@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e619", "64f0b1c8f1d2c4b3a8e4e61a"]},
    {"id": 112, "nombre": "Usuario 12", "email": "usuario12@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e61b"]},
    {"id": 113, "nombre": "Usuario 13", "email": "usuario13@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e61c", "64f0b1c8f1d2c4b3a8e4e61d", "64f0b1c8f1d2c4b3a8e4e61e"]},
    {"id": 114, "nombre": "Usuario 14", "email": "usuario14@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e61f"]},
    {"id": 115, "nombre": "Usuario 15", "email": "usuario15@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e620", "64f0b1c8f1d2c4b3a8e4e621"]},
    {"id": 116, "nombre": "Usuario 16", "email": "usuario16@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e622"]},
    {"id": 117, "nombre": "Usuario 17", "email": "usuario17@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e623", "64f0b1c8f1d2c4b3a8e4e624"]},
    {"id": 118, "nombre": "Usuario 18", "email": "usuario18@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e625"]},
    {"id": 119, "nombre": "Usuario 19", "email": "usuario19@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e626", "64f0b1c8f1d2c4b3a8e4e627", "64f0b1c8f1d2c4b3a8e4e628"]},
    {"id": 120, "nombre": "Usuario 20", "email": "usuario20@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e629"]},
    {"id": 121, "nombre": "Usuario 21", "email": "usuario21@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e62a", "64f0b1c8f1d2c4b3a8e4e62b"]},
    {"id": 122, "nombre": "Usuario 22", "email": "usuario22@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e62c"]},
    {"id": 123, "nombre": "Usuario 23", "email": "usuario23@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e62d", "64f0b1c8f1d2c4b3a8e4e62e"]},
    {"id": 124, "nombre": "Usuario 24", "email": "usuario24@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e62f"]},
    {"id": 125, "nombre": "Usuario 25", "email": "usuario25@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e630", "64f0b1c8f1d2c4b3a8e4e631", "64f0b1c8f1d2c4b3a8e4e632"]},
    {"id": 126, "nombre": "Usuario 26", "email": "usuario26@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e633"]},
    {"id": 127, "nombre": "Usuario 27", "email": "usuario27@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e634", "64f0b1c8f1d2c4b3a8e4e635"]},
    {"id": 128, "nombre": "Usuario 28", "email": "usuario28@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e636"]},
    {"id": 129, "nombre": "Usuario 29", "email": "usuario29@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e637", "64f0b1c8f1d2c4b3a8e4e638"]},
    {"id": 130, "nombre": "Usuario 30", "email": "usuario30@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e639"]},
    {"id": 131, "nombre": "Usuario 31", "email": "usuario31@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e5d6", "64f0b1c8f1d2c4b3a8e4e5d7"]},
    {"id": 132, "nombre": "Usuario 32", "email": "usuario32@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e5d8"]},
    {"id": 133, "nombre": "Usuario 33", "email": "usuario33@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e60b", "64f0b1c8f1d2c4b3a8e4e60c"]},
    {"id": 134, "nombre": "Usuario 34", "email": "usuario34@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e60d"]},
    {"id": 135, "nombre": "Usuario 35", "email": "usuario35@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e60e", "64f0b1c8f1d2c4b3a8e4e60f", "64f0b1c8f1d2c4b3a8e4e610"]},
    {"id": 136, "nombre": "Usuario 36", "email": "usuario36@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e611"]},
    {"id": 137, "nombre": "Usuario 37", "email": "usuario37@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e612", "64f0b1c8f1d2c4b3a8e4e613"]},
    {"id": 138, "nombre": "Usuario 38", "email": "usuario38@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e614"]},
    {"id": 139, "nombre": "Usuario 39", "email": "usuario39@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e615", "64f0b1c8f1d2c4b3a8e4e616"]},
    {"id": 140, "nombre": "Usuario 40", "email": "usuario40@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e617"]},
    {"id": 141, "nombre": "Usuario 41", "email": "usuario41@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e618", "64f0b1c8f1d2c4b3a8e4e619"]},
    {"id": 142, "nombre": "Usuario 42", "email": "usuario42@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e61a"]},
    {"id": 143, "nombre": "Usuario 43", "email": "usuario43@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e61b", "64f0b1c8f1d2c4b3a8e4e61c", "64f0b1c8f1d2c4b3a8e4e61d"]},
    {"id": 144, "nombre": "Usuario 44", "email": "usuario44@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e61e"]},
    {"id": 145, "nombre": "Usuario 45", "email": "usuario45@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e61f", "64f0b1c8f1d2c4b3a8e4e620"]},
    {"id": 146, "nombre": "Usuario 46", "email": "usuario46@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e621"]},
    {"id": 147, "nombre": "Usuario 47", "email": "usuario47@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e622", "64f0b1c8f1d2c4b3a8e4e623"]},
    {"id": 148, "nombre": "Usuario 48", "email": "usuario48@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e624"]},
    {"id": 149, "nombre": "Usuario 49", "email": "usuario49@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e625", "64f0b1c8f1d2c4b3a8e4e626"]},
    {"id": 150, "nombre": "Usuario 50", "email": "usuario50@example.com", "recetas": ["64f0b1c8f1d2c4b3a8e4e627"]}
  ]

  await connect();
  await getDB().collection("usuarios").deleteMany();
  await getDB().collection("usuarios").insertMany(usuarios);

  console.log("🆗 Dataset!!")
  process.exit();
}

seed();