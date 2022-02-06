const router = require("express").Router();
const Restaurant = require("../Restaurant");

router.post("/", async (req, res) => {
  const restaurant = new Restaurant(req.body);
  restaurant.save();
  res.send(restaurant);
});

router.get("/cuisine/Japanese", async (req, res) => {
  const japanese = await Restaurant.find({ cuisine: "japanese" });
  res.send(japanese);
});

router.get("/cuisine/Bakery", async (req, res) => {
  const bakery = await Restaurant.find({ cuisine: "bakery" });
  res.send(bakery);
});

router.get("/cuisine/Italian", async (req, res) => {
  const italian = await Restaurant.find({ cuisine: "italian" });
  res.send(italian);
});

router.get("/", async (req, res) => {
  const order = req.query.sortBy.toString();
  let restaurants = await Restaurant.find();
  try {
    if (order === "ASC") {
      restaurants = await Restaurant.find().sort({ restaurantId: 1 });
    } else if (order == "DESC") {
      restaurants = await Restaurant.find().sort({ restaurantId: -1 });
    }
    res.send(restaurants);
  } catch (err) {
    res.send(err);
  }
});

router.get("/Delicatessen", async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      cuisine: { $eq: "delicatessen" },
      city: { $ne: "brooklyn" },
    })
      .select({ name: 1, _id: 0, city: 1 })
      .sort({ name: 1 });
    res.send(restaurants);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
