import React from 'react'
import PropTypes from 'prop-types'
import Close from '../assets/svg/md-close.svg'
import Overlay from './Overlay'
import classnames from 'classnames'

const Cart = ({ toggleCart, open, children }) => (
  <div>
    <Overlay onClick={() => toggleCart()} open={open} />
    <div className={classnames('cart', { open: open })}>
      <header>
        Kundvagn
        <Close style={{
          float: 'right', padding: 10, height: 30, fill: 'currentColor'
        }} onClick={() => toggleCart()} />
      </header>
      {children}
    </div>
    <style jsx>{`
      header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background: #FFF;
        height: 50px;
        box-shadow: 0px 2px 5px #f7f7f7;
      }
      .cart {
        position: fixed;
        height: 100vh;
        width: calc(100vw - 50px);
        right: -100vw;
        background: #FFF;
        box-shadow: 1px 0px 50px 0px #000
        z-index: 5;
        transition: right .3s;
      }
      .open {
        right: 0vw;
      }
    `}
    </style>
  </div>
)

Cart.propTypes = {
  toggleCart: PropTypes.func,
  open: PropTypes.bool,
  children: PropTypes.node
}

export default Cart
