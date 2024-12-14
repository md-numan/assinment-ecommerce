import { JWT_SECRET } from "../config/confit.js";

import jwt from "jsonwebtoken";

export const EncodeToken = (email, user_id) => {
  const KEY = JWT_SECRET;
  const JWT_EXPIRATION_TIME = "1h";
  const EXPIRE = { expiresIn: JWT_EXPIRATION_TIME };
  const PAYLOAD = { email: email, user_id: user_id };

  return jwt.sign(PAYLOAD, KEY, EXPIRE);
};

export const DecodeToken = (token) => {

    try{
        const decode = jwt.verify(token, JWT_SECRET);
        return decode;

    }catch(e){
        return null;
    }
};
