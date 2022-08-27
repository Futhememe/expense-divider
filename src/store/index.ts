import create from 'zustand'

export interface ExpenseDTO {
  id: string;
  expenseName: string;
  total: number;
  esther: number;
  gustavo: number;
}

interface IExpense {
  expenseList: ExpenseDTO[]
  addExpense: (expense: ExpenseDTO) => void
  setAllExpenses: (expenses: ExpenseDTO[]) => void
}

export const useExpenseStore = create<IExpense>()((set) => ({
  expenseList: [],
  setAllExpenses: (expenses: ExpenseDTO[]) => set(state => ({ expenseList: expenses })),
  addExpense: (expense: ExpenseDTO) => set((state) => ({expenseList: [...state.expenseList, expense]})),
}))