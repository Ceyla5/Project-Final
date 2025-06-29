import { userModel } from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


export const loginController = async (req, res) => {
  try {
    const { password, email } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).send("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send("Wrong password");
    }

    const token = jwt.sign(
      { email: user.email, role: user.role },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );

    res.send(token);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const registerController = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
      role: "user",
    });

    await newUser.save();

    const token = jwt.sign(
      { email: email, role: "user" },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );

    res.send(token);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
