const mongoose = require("mongoose");

const RestaurantSchema = mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  address: { type: String },
  city: { type: String },
  restaurantId: { type: Number },
  cuisine: { type: String, required: true },
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
