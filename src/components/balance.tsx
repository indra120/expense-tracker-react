interface Props {
  total: number
}

const Balance: React.FC<Props> = ({ total }) => (
  <>
    <h4>Your Balance</h4>
    <h1>${total}</h1>
  </>
)

export default Balance