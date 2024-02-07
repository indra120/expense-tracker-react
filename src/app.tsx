import { useEffect, useMemo, useState } from "react"
import { ToastContainer } from "react-toastify"
import TransactionList from "@/components/transaction-list"
import Balance from "@/components/balance"
import IncomeExpenses from "@/components/income-expenses"
import AddTransaction from "@/components/add-transaction"

export interface Transaction {
  id: number
  text: string
  amount: number
}

const App = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(
    JSON.parse(localStorage.getItem("transactions")!) || []
  )

  // Persist data on local storage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions))
  }, [transactions])

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
        <TransactionList transactions={transactions} handleDelete={deleteTransaction} />
        <AddTransaction setTransactions={setTransactions} />
      </div>

      <ToastContainer />
    </>
  )
}

export default App