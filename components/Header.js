import HeaderMenu from './HeaderMenu'
import MenuIcon from '../assets/svg/md-menu.svg'

export default (props) =>
  <div>
    <header>
      <MenuIcon style={{ height: 50, color: '#FFF', fill: 'currentColor' }} onClick={() => props.toggleDrawer()} />
      <span>Header</span>
    </header>
    <HeaderMenu />
    <style jsx>{`
      header {
        display: flex;
        align-items: center;
        background: #1a171b;
        color: white;
        height: 50px;
      }
    `}</style>
  </div>