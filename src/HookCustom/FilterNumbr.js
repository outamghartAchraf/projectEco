import { Currency } from "react-intl-number-format";


const Bar = (num) => (
    <Currency locale="en-US" currency="USD">{num}</Currency>
  )

export default Bar