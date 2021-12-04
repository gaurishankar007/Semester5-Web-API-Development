const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

require("./database/db");

const userRoute = require("./routes/userRoute");
app.use(userRoute);


// const productRoute = require("./routes/ProductRoute");
// app.use(productRoute);

app.listen(90);