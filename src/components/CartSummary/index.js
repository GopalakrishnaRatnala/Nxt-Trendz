import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
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

          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
