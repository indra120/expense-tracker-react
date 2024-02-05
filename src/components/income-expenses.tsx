interface IncomeExpensesProps {
  income: number
  expenses: number
}

const IncomeExpenses: React.FC<IncomeExpensesProps> = (props) => (
  <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p className="money plus">+${props.income}</p>
    </div>

    <div>
      <h4>Expense</h4>
      <p className="money minus">-${props.expenses * -1}</p>
    </div>
  </div>
)

export default IncomeExpenses
