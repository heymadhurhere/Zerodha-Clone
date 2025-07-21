const { model } = require("mongoose");

const PositionSchema = require("../schemas/PositionsSchema");

const PositionModel = model("position", PositionSchema);

module.exports = { PositionModel };
