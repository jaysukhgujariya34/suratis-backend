import mongoose from "mongoose";

const Schema = mongoose.Schema;

const suppliersSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
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
  categort: {
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
  state: {
    type: String,
    require: true,
  },
  GST: {
    type: String,
    require: true,
  },
  FSSI: {
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

export default mongoose.model("suppliers", suppliersSchema);
