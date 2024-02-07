interface Props {
  income: number
  expenses: number
}

const IncomeExpenses: React.FC<Props> = ({ income, expenses }) => (
  <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p className="money plus">+${income}</p>
    </div>

    <div>
      <h4>Expense</h4>
      <p className="money minus">-${expenses * -1}</p>
    </div>
  </div>
)

export default IncomeExpenses