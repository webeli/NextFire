import React from 'react'
import PropTypes from 'prop-types'
import DrawerIcon from '../assets/svg/md-menu.svg'
import CartIcon from '../assets/svg/md-cart.svg'

const Header = ({ toggleDrawer, toggleCart }) => (
  <div>
    <header>
      <DrawerIcon style={{
        padding: 10, height: 30, color: '#FFF', fill: 'currentColor', background: '#000'
      }} onClick={() => toggleDrawer()} />
      <span>Skokung</span>
      <CartIcon style={{
        padding: 10, height: 30, color: '#FFF', fill: 'currentColor', background: '#000'
      }} onClick={() => toggleCart()} />
    </header>
    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #FFF;
        height: 50px;
        box-shadow: 0px 2px 5px #f7f7f7;
      }
    `}
    </style>
  </div>
)

Header.propTypes = {
  toggleDrawer: PropTypes.func,
  toggleCart: PropTypes.func
}

export default Header
