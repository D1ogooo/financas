export interface FinancaSimplificada {
  body: {
    name: string;
    date: string;
    value: number;
  },
  userId: string;
  itemId?: string | undefined;
  message: string;
}

export interface DateFinanceType {
  date: string,
  name: string,
  value: number,
  userId: string,
}
