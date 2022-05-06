const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));
app.use(express.static("views"));
app.listen(3030, () => console.log("Server Run"));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});
app.get("/listado-productos", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/listado-productos.html"));
});
app.get("/detalle-producto", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/detalle-producto.html"));
});
app.get("/carrito-compras", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/carrito-compras.html"));
});
