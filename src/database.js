import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://gabrielalfonzo:gabrielalfonzo@gabrielalfonzo.457k1.mongodb.net/?retryWrites=true&w=majority&appName=gabrielalfonzo"
  )
  .then(() => console.log("Conectado a la base de datos"))
  .catch((error) => console.log("Ocurrio un error", error));

//mongodb+srv://gabrielalfonzo:gabrielalfonzo@gabrielalfonzo.457k1.mongodb.net/?retryWrites=true&w=majority&appName=gabrielalfonzo
