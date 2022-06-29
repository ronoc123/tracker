dotenv.config();
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const jwtGenerator = (user_id) => {
  const payload = {
    user: {
      id: user_id,
    },
  };

  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "24h" });
};

export default jwtGenerator;
