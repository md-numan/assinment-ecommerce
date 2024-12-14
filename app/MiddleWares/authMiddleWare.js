import { EncodeToken, DecodeToken } from "../Utility/tokenUtility.js";

export default (req, res, next) => {
  let token = req.headers["token"];
  let decodedToken = DecodeToken(token);
  if (decodedToken === null) {
    res.status(401).send({ status: "failed", message: "Unauthorized" });
  } else {
    let NIDNumber = decodedToken.NIDNumber;
    let user_id = decodedToken.user_id;

    req.headers.NIDNumber = NIDNumber;
    req.headers.user_id = user_id;

    next();
  }
};
