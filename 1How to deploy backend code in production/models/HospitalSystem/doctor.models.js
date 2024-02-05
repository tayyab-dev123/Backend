import mongoose from "mongoose";

/*
    name
    salary
    qualification
    experianceInYears
    workInHospitals

*/

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experianceInYears: {
      type: String,
      default: 0,
    },
    workInHospitals: {
      type: mongoose.Schema.Types.ObjectIds,
      ref: "Hospital",
      required: true,
    },
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
