import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import CartSummary from '../CartSummary'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value

      const onClickRemoveAllButton = () => {
        removeAllCartItems()
      }

      return (
        <>
          <button
            className="remove-all-button"
            type="button"
            onClick={onClickRemoveAllButton}
          >
            Remove All
          </button>
          <ul className="cart-list">
            {cartList.map(eachCartItem => (
              <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
          </ul>
          <CartSummary />
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
