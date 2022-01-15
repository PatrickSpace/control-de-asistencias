require("dotenv").config();
const express = require("express");
require("./db.js");
const morgan = require("morgan");
const cors = require("cors");

//rutas por entidad
const authroutes = require("./routes/auth.routes");

//set app
const app = express();

//settings
app.set("port", process.env.PORT || 3000);
app.use(express.json());

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(
  express.urlencoded({
    extended: false,
  })
); //extended es para verificar que envian texto chiqquito (cambiar cuando se reciba el PDF)

//routes
app.use("/api/auth", authroutes);

//init
app.listen(app.get("port"), () => {
  console.log(`API running at http://localhost:${app.get("port")}`);
});
