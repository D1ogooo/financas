import { FinancaSimplificada } from "../@types/FinancasType";

class FinancasService {
  date: number;

  constructor(body: FinancaSimplificada) {
    this.date = body.date
  }

  create() {

  }

  read() {

  }

  update() {

  }

  delete() {

  }
}

export { FinancasService }