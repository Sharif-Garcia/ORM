require("dotenv").config();
const express = require("express");
const sequelize = require("./database");
require("./models/index");

const app = express();
app.use(express.json());

const bibliotecaRoutes = require("./routes/biblioteca");
app.use("/api", bibliotecaRoutes);

app.get("/", (req, res) => {
  res.send("Biblioteca Digital API running");
});

sequelize
  .authenticate()
  .then(() => console.log("Base de datos conectada"))
  .catch((err) => console.error("Error al conectar:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
