import mongoose from "mongoose";

/*
    name
    adressLine1
    adressLine2
    city
    pincode
    spectializedIn
    

*/

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    adressLine1: {
      type: String,
      required: true,
    },
    adressLine2: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    spectializedIn: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);
