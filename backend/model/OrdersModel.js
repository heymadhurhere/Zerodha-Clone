const { model } = require("mongoose");

const OrderSchema = require("../schemas/OrdersSchema");

const OrderModel = model("order", OrderSchema);

module.exports = { OrderModel };
