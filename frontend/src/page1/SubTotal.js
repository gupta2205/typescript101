import React from 'react';


function SubTotal() {
  return (
    <>
      <div className={"SubTotal"}>
        <p className={"SubTotalP"}>Subtotal(4 items)</p>
        <p className={"SubTotalF"}>$32.00</p>
      </div>
      <div className={"SubTotalDetail"}>
        <p className={"SubTotalDetailfP"}>Below order minimum (less than $35)</p>
        <p className={"SubTotalDetailP"}>$5.99</p>
      </div>
    </>
  )
}

export default SubTotal;