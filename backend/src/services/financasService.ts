import { DateFinanceType, FinancaSimplificada } from "../@types/FinancasType";
import { HttpException } from "../errors/HttpException";
import { prisma } from "../lib/prisma";
import { Request } from 'express'
class FinancasService {
  name: string;
  date: string;
  value: number
  userId: string;
  itemId?: string | undefined;
// FinancaSimplificada
  constructor(body:any, userId: string, itemId?: string) {
    console.log(body, userId, itemId)
    this.date = body.date
    this.name = body.name
    this.value = body.value
    this.userId = userId
    this.itemId = itemId
  }

  public async create(): Promise<{ message: string, financeRes: DateFinanceType }> {
    console.log(this.date, this.name, this.value, this.userId)

    if (!this.date || !this.name || !this.value || !this.userId) {
      throw new HttpException(400, "Preencha todos os campos");
    }

    const financeRes = await prisma.financa.create({
      data: {
        date: new Date().toISOString(),
        name: this.name,
        value: this.value,
        userId: this.userId
      }
    })

    console.log(financeRes)

    return {
      financeRes: {
        ...financeRes,
        date: financeRes.date instanceof Date ? financeRes.date.toISOString() : financeRes.date
      },
      message: "Sucesso!, conteudo criado"
    }
  }

  public async read(): Promise<{ message: string, listFinances: DateFinanceType[] }> {
    const listFinances = await prisma.financa.findMany();
    const formattedFinances: DateFinanceType[] = listFinances.map(finance => ({
      ...finance,
      date: finance.date instanceof Date ? finance.date.toISOString() : finance.date
    }));
    return {
      listFinances: formattedFinances,
      message: "Sucesso! itens listados"
    }
  }

  public async update(): Promise<{ message: string, newFinance: DateFinanceType }> {
    if (!this.date || !this.name || !this.value || this.itemId) {
      throw new HttpException(400, "Preencha todos os campos");
    }

    const newFinance = await prisma.financa.update({
      where: {
        id: this.itemId,
      },
      data: {
        date: this.date,
        name: this.name,
        value: this.value,
        userId: this.userId
      }
    })

    return {
      newFinance: {
        ...newFinance,
        date: newFinance.date instanceof Date ? newFinance.date.toISOString() : newFinance.date
      },
      message: "Sucesso! item atualizado"
    }
  }

  public async delete(): Promise<{ message: string }> {
    if (!this.itemId) {
      throw new HttpException(400, "É necessário declarar o id do item");
    }

    await prisma.financa.delete({
      where: { id: this.itemId },
    })

    return {
      message: "Sucesso! item deletado"
    }
  }
}

export { FinancasService }