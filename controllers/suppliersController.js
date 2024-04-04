
import Suppliers from "../models/suppliers";

export const AllSuppliers = async (query) => {
  return await Suppliers.find(query);
};
export const oneSuppliers = async (query) => {
  return await Suppliers.find(query);
};
export const AddSuppliers = async (data) => {
  console.log("data", data);
  return await Suppliers.create(data);
};
