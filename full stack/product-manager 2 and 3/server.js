const express = require("express");
const app = express();
const cors = require('cors');
// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");
app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the products routes function from our product.routes.js file
const AllMyUserRoutes = require("./server/routes/product.routes");
AllMyUserRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));