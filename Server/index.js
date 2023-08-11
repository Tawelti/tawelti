const express = require("express");
const sequelize = require("./database/configdb");
const { Sequelize } = require("sequelize");
const cors = require("cors");

const AdminRoutes = require("./routes/AdminRoutes")
const ClaimRouter = require("./routes/claimRoutes")
const clientRoutes = require("./routes/clientRoutes");
const CommentsRoutes = require("./routes/CommentsRoutes");
const ProductsRoutes = require("./routes/ProductsRoutes");
const FavoriteRoutes = require("./routes/FavoriteRoutes")
const orderRoutes = require("./routes/orderRoutes");
const placesRoutes = require("./routes/placesRoutes");
const ReservationRoutes = require("./routes/ReservationRoutes");
const sellerRoutes = require("./routes/sellerRoutes");
const tablesRoutes = require("./routes/tablesRoutes");
const payment =require("./routes/PaymentRoutes")

const PORT = process.env.PORT || 3000;




const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("api/Favorite" , FavoriteRoutes)
app.use("api/Claim" , ClaimRouter)
app.use("/api/Admin" , AdminRoutes)
app.use("/api/client", clientRoutes);
app.use("/api/Comments", CommentsRoutes);
app.use("/api/menu", ProductsRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/places", placesRoutes);
app.use("/api/Reservation", ReservationRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/tables", tablesRoutes);
app.use("/api/payment",payment)


sequelize.sync().then(() => console.log("database connected"));
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  }); 


app.listen(PORT, function () {
    console.log("listening on port " + PORT);
  });
  