const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookie = require("cookie-parser");
const router = express.Router();

app.use(express.json());
app.use(cookie());


// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

router.route("/").post(() => {
    res.status(200).send({
      success: "This is Success",
    });
  });

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

// Middle Ware for Error
app.use(errorMiddleware);

module.exports = app;
