import { FinancaSimplificada } from "../@types/FinancasType";
import { HttpException } from "../errors/HttpException";
import { prisma } from "../lib/prisma";

class FinancasService {
  name: string; 
  date: number;
  value: number
  userId: string;

  constructor({ body, userId }: FinancaSimplificada) {
   this.date = body.date
   this.name = body.name
   this.value = body.value
   this.userId = userId
  }
 
   async public create() {
   if(!this.date || !this.name || !this.value) {
    throw new HttpException(400, "Preencha todos os campos");
   }

   const financeRes = await prisma.financa.create({
    date: 8  
   })
  }

  async public read() {
   
  }

  async public update() {
   
  }

  async public delete() {
   
  }
}

export { FinancasService }