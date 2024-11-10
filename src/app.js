import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
const PORT = 8080;
const app = express();

dotenv.config();

const uriConexion = process.env.URIMONGO;
mongoose.connect(uriConexion);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8080, () => {
  console.log("Servidor iniciado");
});
