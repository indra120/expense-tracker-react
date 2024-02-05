import { useMemo, useState } from "react"
import TransactionList from "./components/transaction-list"
import Balance from "./components/balance"

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

  const total = useMemo(
    () => transactions.reduce((acc, data) => acc + data.amount, 0),
    [transactions]
  )

  const deleteTransaction = (id: number) => () => {
    setTransactions((prev) => prev.filter((data) => data.id !== id))
  }

  return (
    <>
      <h2>Expense Tracker</h2>

      <div className="container">
        <Balance total={total} />
        <TransactionList
          transactions={transactions}
          handleDelete={deleteTransaction}
        />
      </div>
    </>
  )
}

export default App
