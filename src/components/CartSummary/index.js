import './index.css'
import Popup from 'reactjs-popup'
import {useState} from 'react'

import CartContext from '../../context/CartContext'

const CartSummary = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')

  const [orderPlaced, setOrderPlaced] = useState(false)

  const handlePaymentMethodChange = event => {
    setSelectedPaymentMethod(event.target.value)
  }

  const handleConfirmOrder = () => {
    setOrderPlaced(true)
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const noOfItems = cartList.length

        const totalOrderPrice = cartList.reduce(
          (accumulator, eachItem) =>
            accumulator + eachItem.price * eachItem.quantity,
          0,
        )

        return (
          <div className="summery-container">
            <div className="content-container">
              <h1 className="order-total-text">
                Order Total:
                <span className="total-price">{`Rs ${totalOrderPrice}/-`}</span>
              </h1>
              <p className="no-of-items-text">{`${noOfItems} items in cart`}</p>
            </div>

            <div className="popup-container">
              <Popup
                modal
                trigger={
                  <button type="button" className="checkout-button">
                    Checkout
                  </button>
                }
              >
                <div className="pop-up-display-container">
                  <div className="confirm-content-container">
                    <h1 className="summary-heading">Order Summary</h1>
                    <hr />
                    <h1 className="order-total-text">
                      Order Total:
                      <span className="total-price">{` Rs ${totalOrderPrice}/-`}</span>
                    </h1>
                    <p className="no-of-items-text">{`${noOfItems} items in cart`}</p>
                  </div>
                  <div className="a-box">
                    <h1 className="payment-heading">Select Payment Method</h1>
                    <hr />
                    <form className="payment-form-container">
                      <div
                        className={`payment-option-container ${
                          selectedPaymentMethod === 'card' && 'payment-selected'
                        }`}
                      >
                        <label>
                          <input
                            type="radio"
                            name="paymentMethod"
                            disabled
                            value="card"
                            checked={selectedPaymentMethod === 'card'}
                            onChange={handlePaymentMethodChange}
                          />
                          Card
                        </label>
                      </div>
                      <br />
                      <div
                        className={`payment-option-container ${
                          selectedPaymentMethod === 'netBanking' &&
                          'payment-selected'
                        }`}
                      >
                        <label>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="netBanking"
                            disabled
                            checked={selectedPaymentMethod === 'netBanking'}
                            onChange={handlePaymentMethodChange}
                          />
                          Net Banking
                        </label>
                      </div>
                      <br />
                      <div
                        className={`payment-option-container ${
                          selectedPaymentMethod === 'upi' && 'payment-selected'
                        }`}
                      >
                        <label>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="upi"
                            disabled
                            checked={selectedPaymentMethod === 'upi'}
                            onChange={handlePaymentMethodChange}
                          />
                          UPI
                        </label>
                      </div>
                      <br />
                      <div
                        className={`payment-option-container ${
                          selectedPaymentMethod === 'wallet' &&
                          'payment-selected'
                        }`}
                      >
                        <label>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="wallet"
                            disabled
                            checked={selectedPaymentMethod === 'wallet'}
                            onChange={handlePaymentMethodChange}
                          />
                          Wallet
                        </label>
                      </div>
                      <br />
                      <div
                        className={`payment-option-container ${
                          selectedPaymentMethod === 'cashOnDelivery' &&
                          'payment-selected'
                        }`}
                      >
                        <label>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="cashOnDelivery"
                            checked={selectedPaymentMethod === 'cashOnDelivery'}
                            onChange={handlePaymentMethodChange}
                          />
                          Cash on Delivery
                        </label>
                      </div>
                      <br />
                      <button
                        type="button"
                        className="confirm-button"
                        disabled={!(selectedPaymentMethod === 'cashOnDelivery')}
                        onClick={handleConfirmOrder}
                      >
                        Confirm Order
                      </button>
                      {orderPlaced && (
                        <p className="order-placed-msg">
                          Your order has been placed successfully
                        </p>
                      )}
                    </form>
                  </div>
                </div>
              </Popup>
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartSummary
