import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'

const Header = ({ toggleDrawer, toggleCart }) => (
  <div>
    <header>
      <Icon name='drawer' style={{color: '#FFF', background: '#000'}} onClick={() => toggleDrawer()} />
      <span>Skokung</span>
      <Icon name='cart' style={{color: '#FFF', background: '#000'}} onClick={() => toggleCart()} />
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
