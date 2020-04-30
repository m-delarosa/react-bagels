import React from "react"
import Bagel from "./Bagel.js"

function BagelContainer(props) {
  const renderBagels = props.bagels.map(bagel => (
    <Bagel key={bagel.id} bagel={bagel.type} />
  ))

  return (
    <ul>
      {renderBagels}
    </ul>
  )
}

export default BagelContainer
