import { useState } from "react"
import { toast } from "react-toastify"
import { Transaction } from "../app"

interface AddTransactionProps {
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>
}

const AddTransaction: React.FC<AddTransactionProps> = (props) => {
  const [newTransaction, setNewTransaction] = useState({
    text: "",
    amount: "",
  })

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault()
    if (!newTransaction.text || !newTransaction.amount) {
      return toast.error("All fields are required!")
    }

    props.setTransactions((lists) => [
      ...lists,
      {
        ...newTransaction,
        id: Math.floor(Math.random() * 69420),
        amount: parseFloat(newTransaction.amount),
      },
    ])
    toast.success("New transaction added")
    setNewTransaction({ text: "", amount: "" })
  }

  return (
    <>
      <h3>Add new transaction</h3>

      <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>

          <input
            type="text"
            id="text"
            value={newTransaction.text}
            onChange={(e) => {
              setNewTransaction((v) => ({ ...v, text: e.target.value }))
            }}
            placeholder="Enter text..."
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>

          <input
            type="text"
            id="amount"
            value={newTransaction.amount}
            onChange={(e) => {
              setNewTransaction((v) => ({ ...v, amount: e.target.value }))
            }}
            placeholder="Enter amount..."
          />
        </div>

        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
