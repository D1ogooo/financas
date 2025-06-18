export interface FinancaSimplificada {
  body: {
    name: string;
    date: string;
    value: number;
  },
  userId: string;
  itemId?: string | undefined;
}

export interface DateFinanceType {
  date: string,
  name: string,
  value: number,
  userId: string,
  message: string
}
