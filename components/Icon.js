import React from 'react'
import PropTypes from 'prop-types'
import DrawerIcon from '../assets/svg/md-menu.svg'
import CartIcon from '../assets/svg/md-cart.svg'
import CloseIcon from '../assets/svg/md-close.svg'

const baseStyle = {
  padding: 10,
  height: 30,
  fill: 'currentColor'
}

const Icon = ({ name, onClick, style }) => {
  switch (name) {
    case 'cart': return <CartIcon style={{...baseStyle, ...style}} onClick={() => onClick()} />
    case 'close': return <CloseIcon style={{...baseStyle, ...style}} onClick={() => onClick()} />
    case 'drawer': return <DrawerIcon style={{...baseStyle, ...style}} onClick={() => onClick()} />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.any
}

export default Icon
