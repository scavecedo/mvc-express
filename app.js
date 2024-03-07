const express = require("express");
const app = express();
const mainRoutes = require("./routes/main.routes");

app.use( express.static("public") );

app.use("/",mainRoutes);

app.listen(3000,()=> console.log("Server corriendo en el puerto 3000"));
