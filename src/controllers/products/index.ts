
import { Request, Response } from "express";
import { Validators } from "../../utils/utils";

export class Product  {


  newProduct = (req: Request, res: Response):void => {
    let { notError, error } = new Validators().validateFruti(req.body);
    if (notError) {
      res.status(200).send({ message: "Registered product!" });
    } else {
      res.status(400).send({ errors: error });
    }
  };
  
}

module.exports = {Product}

