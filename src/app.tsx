import { useState } from "react"
import TransactionList from "./components/transaction-list"

export interface Transaction {
  id: number
  text: string
  amount: number
}

const App = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, text: "Salary", amount: 500 },
  ])

  const deleteTransaction = (id: number) => () => {
    setTransactions((prev) => prev.filter((data) => data.id !== id))
  }

  return (
    <>
      <h2>Expense Tracker</h2>

      <div className="container">
        <TransactionList
          transactions={transactions}
          handleDelete={deleteTransaction}
        />
      </div>
    </>
  )
}

export default App
