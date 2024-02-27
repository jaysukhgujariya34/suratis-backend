import { Router } from "express";
import Suppliers from "../models/buyers";

export const AllSuppliers = async (query) => {
  return await Suppliers.find(query);
};
export const oneSuppliers = async (query) => {
  return await Suppliers.find(query);
};
export const AddSuppliers = async (data) => {
  return await Suppliers.create(data);
};
