const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const clientSchema = new Schema(
  {
    email: String,
    name: String,
    surname: String,
    encryptedPassword: String,
    phoneNumber: Number
  },
  {
    timestamps: true
  }
);
const Client = mongoose.model("Client", clientSchema);
