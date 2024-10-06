const { Schema, model } = require("mongoose");

const OrderSchema = new Schema({
  line_items: Object,
  name: String,
  email: String,
  city: String,
  postalCode: String,
  streetAddress: String,
  country: String,
  paid: Boolean,
});

export const Order = model?.Order || model("Order", OrderSchema);