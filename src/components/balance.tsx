interface BalanceProps {
  total: number
}

const Balance: React.FC<BalanceProps> = (props) => (
  <>
    <h4>Your Balance</h4>
    <h1 id="balance">${props.total}</h1>
  </>
)

export default Balance
