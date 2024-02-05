import { useMemo, useState } from "react"
import TransactionList from "./components/transaction-list"
import Balance from "./components/balance"
import IncomeExpenses from "./components/income-expenses"

export interface Transaction {
  id: number
  text: string
  amount: number
}

const App = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, text: "Salary", amount: 500 },
    { id: 2, text: "Foods", amount: -100 },
  ])

  const total = useMemo(() => {
    return transactions.reduce((acc, data) => acc + data.amount, 0)
  }, [transactions])

  const income = useMemo(() => {
    return transactions
      .filter((data) => data.amount > 0)
      .reduce((acc, data) => acc + data.amount, 0)
      .toFixed(2)
  }, [transactions])

  const expenses = useMemo(() => {
    return transactions
      .filter((data) => data.amount < 0)
      .reduce((acc, data) => acc + data.amount, 0)
      .toFixed(2)
  }, [transactions])

  const deleteTransaction = (id: number) => () => {
    setTransactions((prev) => prev.filter((data) => data.id !== id))
  }

  return (
    <>
      <h2>Expense Tracker</h2>

      <div className="container">
        <Balance total={total} />
        <IncomeExpenses income={+income} expenses={+expenses} />
        <TransactionList
          transactions={transactions}
          handleDelete={deleteTransaction}
        />
      </div>
    </>
  )
}

export default App
