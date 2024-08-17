import { Schema, model, models } from "mongoose";

// Define an interface representing a document in MongoDB.
interface User extends Document {
  email: string | undefined;
  name: string;
  password: string;
  image: string;
}

// Create a Schema corresponding to the document interface.
const UserSchema = new Schema<User>(
  {
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Email is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    image: {
      type: String,
      default: "https://via.placeholder.com/150",
    },
  },
  { timestamps: true }
);

// Create a Model.
const User = models.User || model("User", UserSchema);

export default User;
