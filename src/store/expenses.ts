import create from 'zustand'

export interface ExpenseDTO {
  id: string;
  expenseName: string;
  total: number;
}

interface IExpense {
  expenseList: ExpenseDTO[]
  addExpense: (expense: ExpenseDTO) => void
  setAllExpenses: (expenses: ExpenseDTO[]) => void
  removeExpense: (id: string) => void
  editExpense: (id: string, newExpense: ExpenseDTO) => void
  getExpenseById: (id: string) => ExpenseDTO | undefined
}

export const removeExpense = (expenses: ExpenseDTO[], id: string): ExpenseDTO[] => {
  let oldState = [...expenses];

  const index = oldState.findIndex(item => item.id == id);
  oldState.splice(index, 1);

  return oldState;
}

export const editExpense = (expenses: ExpenseDTO[], id: string, newExpense: ExpenseDTO): ExpenseDTO[] => {
  let oldState = [...expenses];

  const index = oldState.findIndex(item => item.id == id);
  oldState[index] = newExpense;
  
  return oldState;
}

export const useExpenseStore = create<IExpense>()((set, get) => ({
  expenseList: [],
  setAllExpenses: (expenses: ExpenseDTO[]) => set(state => ({ expenseList: expenses })),
  addExpense: (expense: ExpenseDTO) => set((state) => ({expenseList: [...state.expenseList, expense]})),
  removeExpense: (id: string) => set((state) => ({expenseList: removeExpense(state.expenseList, id)})),
  editExpense: (id: string, newExpense: ExpenseDTO) => set((state) => ({expenseList: editExpense(state.expenseList, id, newExpense)})),
  getExpenseById: (id: string) => get().expenseList.find(expense => expense.id === id)
}))