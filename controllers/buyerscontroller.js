import Buyers from "../models/buyers";
 

export const AllBuyers = async (query) => {
  return await Buyers.find(query);
};
export const oneBuyers = async (query) => {
  return await Buyers.find(query);
};
export const AddBuyers = async (data) => {
  consol.log("data", data);
  return await Buyers.create(data);
};