const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            minlength: 9,
            lowercase: true,
            unique: true,
        },
        userType: {
            type: String,
            default: "CUSTOMER",
            enum: ["CUSTOMER", "ADMIN"],
        },
    },
    { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("userData", userSchema);
