import HeaderMenu from './HeaderMenu'
import DrawerIcon from '../assets/svg/md-menu.svg'
import CartIcon from '../assets/svg/md-cart.svg'

export default (props) =>
  <div>
    <header>
      <DrawerIcon style={{ height: 50, color: '#FFF', fill: 'currentColor' }} onClick={() => props.toggleDrawer()} />
      <span>Header</span>
      <CartIcon style={{ height: 50, color: '#FFF', fill: 'currentColor' }} onClick={() => props.toggleCart()} />
    </header>
    <HeaderMenu />
    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #1a171b;
        color: white;
        height: 50px;
      }
    `}</style>
  </div>