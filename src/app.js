import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import mongoose from "mongoose";
import { engine } from "express-handlebars";
import "./database.js";
import productsRouter from "./routes/products.router.js";
import cartRouter from "./routes/cart.router.js";
import viewRouter from "./routes/views.router.js";

const app = express();
const Port = 8080;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

//rutas
app.use("/api/products", productsRouter);
app.use("/api/carts", cartRouter);
app.use("/", viewRouter);

// listen
app.listen(Port, () => {
  console.log(`http://localhost:${Port}/`);
});
