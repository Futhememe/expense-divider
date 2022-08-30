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
  removeExpense: (id: string) => void
}

export const removeExpense = (expenses: ExpenseDTO[], id: string): ExpenseDTO[] => {
  let oldState = [...expenses];

  const index = oldState.findIndex(item => item.id == id);
  oldState.splice(index, 1);

  return oldState;
}

export const useExpenseStore = create<IExpense>()((set) => ({
  expenseList: [],
  setAllExpenses: (expenses: ExpenseDTO[]) => set(state => ({ expenseList: expenses })),
  addExpense: (expense: ExpenseDTO) => set((state) => ({expenseList: [...state.expenseList, expense]})),
  removeExpense: (id: string) => set((state) => ({expenseList: removeExpense(state.expenseList, id)}))
}))