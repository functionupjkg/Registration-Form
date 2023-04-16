const mongoose = require("mongoose");

const registerDataSchema = new mongoose.Schema({

    firstName: String,
    lastName: String,
    email: String,
    mobileNo: String,
    firmName: String,
    plan: String,
    address: String,
    state: String,
    pinCode: String,
    gstNo: String,
    categories: {
        Allopathic: Boolean,
        Generic: Boolean,
        SurgicalMedicalEquipment: Boolean,
        OTC: Boolean,
        Ayurvedic: Boolean,
        Veterinary: Boolean
      },
    dlNo1: String,
    dlNo2: String,
    fssaiNo: String,
    registerAs: String,
    bankAccountName: String,
    bankAccountNo: String,
    ifscCode: String,
    signature: String,
    branch: String

});


module.exports = mongoose.model("registerData", registerDataSchema)