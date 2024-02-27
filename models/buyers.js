import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BuyersSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  prefix: {
    type: String,
    require: true,
  },
  contectNomber: {
    type: String,
    require: true,
  },
  companyName: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  product: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  quntity: {
    type: String,
    require: true,
  },
  document: {
    type: String,
    require: false,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

export default mongoose.model("Buyers", BuyersSchema);
