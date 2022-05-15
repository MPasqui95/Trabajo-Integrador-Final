const express = require("express");
const app = express();
const path = require("path");

//Ruta Index
const router = require("./src/routes/mainRoutes");

//Ruta Productos
const routerProd = require("./src/routes/productsRoutes");

//Ruta Login y Register
const routerUser = require("./src/routes/userRoutes");

// instalado y configurado ejs
app.set("view engine", "ejs");
app.set ("views", "./src/views")

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.use(express.static("views"));

app.listen(3030, () => console.log("Server Run"));

//Ruteo
app.use("/", router);
app.use("/", routerProd);
app.use("/", routerUser);

