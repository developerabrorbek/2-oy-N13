const { Schema, model, SchemaTypes } = require("mongoose");

const userSchema = new Schema({
  first_name: {
    type: String,
    required: [true, "First name berilishi shart⚠️"],
    minLength: [5, "First name uchun minimal uzunlik 5 ga teng"],
    default: "Og'abek",
    trim: true,
  },
  last_name: {
    type: String,
    validate: {
      validator: function (value) {
        console.log(/^[A-Za-z]+$/.test(value), value);
        return /^[A-Za-z]+$/.test(value);
      },
      message: (props) => `${props.value} faqat harflardan iborat emas`,
    },
    required: true,
  },
  phone: {
    type: String,
    required: true,
    minLength: [13, "Nomer 13 uzunlikda bo'lishi kerak"],
    maxLength: 13,
  },
  age: {
    type: Number,
    min: [18, "Minimal yosh 18 bo'lishi kerak"],
    required: true,
  },
  status: {
    type: String,
    enum: {
      values: ["active", "inactive"],
      message: "Status active yoki inactive bo'lishi kerak",
    },
    required: true,
  },
  birthDate: {
    type: Date,
    required: false,
  },
  interests: {
    type: [String],
    required: true,
  },
  products: [
    {
      type: SchemaTypes.ObjectId,
      ref: "Product",
    },
  ],
});

const User = model("User", userSchema);

module.exports = User;
