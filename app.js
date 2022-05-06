const express = require("express");
const app = express();
const path = require("path");

//Ruta Index
const router = require("./routes/main");

//Ruta Productos
const routerProd = require("./routes/products");

//Ruta Login y Register
const routerUser = require("./routes/user");

// instalado y configurado ejs
app.set("view engine", "ejs");

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.use(express.static("views"));

app.listen(3030, () => console.log("Server Run"));

//Ruteo
app.use("/", router);

app.get("/listado-productos", routerProd);

app.get("/detalle-producto", routerProd);

app.get("/carrito-compras", routerProd);

app.get("/crear-productos", routerProd);

app.get("/editar-productos", routerProd);

app.get("/login", routerUser);

app.get("/register", routerUser);
