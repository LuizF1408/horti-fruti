import { NewProducts } from "../interfaces/index";

export class Validators {
  validateFruti(fruti: NewProducts) {
    let isValid = true;
    let err: object[] = [];

    if (typeof fruti.id != "number") {
      let error = { id: "not a number" };
      err.push(error);
      isValid = false;
    }

    if (typeof fruti.qtd != "number") {
      let error = { qtd: "not a number" };
      err.push(error);
      isValid = false;
    }
    if (typeof fruti.price != "number") {
      let error = { id: "not a number" };
      err.push(error);
      isValid = false;
    }

    if (typeof fruti.name != "string") {
      let error = { name: "not a string" };
      err.push(error);
      isValid = false;
    }

    return {notError:isValid,error:err};
  }
}

module.exports = { Validators };
