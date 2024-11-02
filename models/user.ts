import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
      minLength: 1,
      maxLength: 20,
    },

    email: {
      type: String,
      required: [true, "Email is required."], // Fix: Corrected the error message
      index: true,
      lowercase: true,
      unique: true,
      trim: true,
      minLength: 5,
      maxLength: 50, // Adjusted max length for typical emails
    },

    password: {
      type: String,
      required: [true, "Password is required."], // Added required validation
    },

    role: {
      type: String,
      default: "user",
    },

    image: {
      type: String,
    },

    resetCode: {
      data: {
        type: String,
      },
      expiresAt: {
        type: Date,
        default: () => new Date(Date.now() + 10 * 60 * 1000), // 10 mins
      },
    },
  },
  { timestamps: true }
);

// Apply the uniqueValidator plugin to the schema
userSchema.plugin(uniqueValidator);

export default mongoose.models.User || mongoose.model("User", userSchema);
