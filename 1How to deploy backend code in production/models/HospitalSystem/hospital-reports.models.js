import mongoose from "mongoose";

const hospitalReportSchema = new mongoose.Schema({}, { timestamps: true });

export const HospitalReport = mongoose.model(
  "HospitalReport",
  hospitalReportSchema
);
