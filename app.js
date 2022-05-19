const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override"); // Pasar poder usar los métodos PUT y DELETE


//Ruta Index
const router = require("./src/routes/mainRoutes");

//Ruta Productos
const routerProd = require("./src/routes/productsRoutes");

//Ruta Login y Register
const routerUser = require("./src/routes/userRoutes");

// instalado y configurado ejs
app.set("view engine", "ejs");
app.set ("views", "./src/views")


//====== MIDDLEAWARES 
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));
app.use(express.json());
app.use(logger("dev"));
app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

app.use(express.static("views"));

app.listen(3030, () => console.log("Server Run in Port 3030"));

//Ruteo
app.use("/", router);
app.use("/", routerProd);
app.use("/", routerUser);

//=== INFORMATION CAPTURE =====
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cookieParser());