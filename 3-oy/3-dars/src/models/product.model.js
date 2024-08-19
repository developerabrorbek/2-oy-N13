const { Schema, model, SchemaTypes } = require("mongoose");

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title name berilishi shart⚠️"],
      trim: true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 4,
      required: true,
    },
    status: {
      type: String,
      enum: {
        message: "Enum status",
        values: ["active", "inactive"],
      },
      default: "active",
    },
    color: {
      type: String,
    },
    brend: {
      type: String,
    },
    created_at: {
      type: [Date],
      required: true,
    },
    user: {
      type: SchemaTypes.ObjectId,
      ref: "User",
    },
  },
  {
    collection: "products",
  }
);

const Product = model("Product", productSchema);

module.exports = Product;
