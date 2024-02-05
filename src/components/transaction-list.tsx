import React from "react"
import { Transaction } from "../app"

interface TransactionListProps {
  transactions: Transaction[]
  handleDelete: (id: number) => () => void
}

const TransactionList: React.FC<TransactionListProps> = (props) => {
  return (
    <>
      <h3>History</h3>

      <ul className="list">
        {props.transactions.map(({ id, text, amount }) => (
          <li className={`list ${amount < 0 ? "minus" : "plus"}`} key={id}>
            {text}
            <span>
              {amount < 0 ? "-" : ""}$
              {Math.abs(amount)}
            </span>

            <button onClick={props.handleDelete(id)} className="delete-btn">
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TransactionList