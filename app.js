const express = require("express");
const app = express();
const path = require("path");
const router = require ("./src/routers/main");
const routerProd = require ("./src/routers/products");
const routerUser = require ("./src/routers/user")

// instalado y configurado ejs
app.set("view engine", "ejs")

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.use(express.static("views"));

app.listen(3030, () => console.log("Server Run"));

app.use("/", router);

app.get("/listado-productos", routerProd);

app.get("/detalle-producto", routerProd);

app.get("/carrito-compras", routerProd);

app.get("/login", routerUser);

app.get("/register", routerUser);
