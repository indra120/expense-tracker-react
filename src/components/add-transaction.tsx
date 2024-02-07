import { useState } from "react"
import { toast } from "react-toastify"
import type { Transaction } from "@/app"

interface Props {
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>
}

const AddTransaction: React.FC<Props> = (props) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTransaction((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <h3>Add new transaction</h3>

      <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input name="text" value={newTransaction.text} onChange={handleChange} type="text" id="text" placeholder="Enter text..." />
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
          <input name="amount" value={newTransaction.amount} onChange={handleChange} type="text" id="amount" placeholder="Enter amount..." />
        </div>

        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction