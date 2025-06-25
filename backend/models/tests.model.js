import mongoose from 'mongoose'

const testSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim:true,
  },
  description: {
    type: String,
    required:true
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ["Blood", "COVID-19", "Urine", "General", "Other"],
    default: "General",
  },
  available: {
    type: Boolean,
    default: true,
  },
  sampleRequired: {
    type: String,
    enum: ["Blood", "Urine", "Saliva", "Swab", "None"],
  },
  processingTime: {
    type: String, // e.g., "24 hours", "2-3 days"
  },
  instructions: {
    type: String,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
},
{ timestamps: true }//createdAt,updatedAt
);
const Test = mongoose.model('Test', testSchema);//mongoose.model(modelName, schema)

export default Test;
