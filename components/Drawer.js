import React from 'react'
import PropTypes from 'prop-types'
import Close from '../assets/svg/md-close.svg'
import Overlay from './Overlay'
import classnames from 'classnames'

const Drawer = ({ toggleDrawer, open, children }) => (
  <div>
    <Overlay onClick={() => toggleDrawer()} open={open} />
    <div className={classnames('drawer', { open: open })}>
      <header>
        <Close style={{ padding: 10, height: 30, fill: 'currentColor' }} onClick={() => toggleDrawer()} />
        <span>Meny</span>
      </header>
      {children}
    </div>
    <style jsx>{`
      header {
        display: flex;
        align-items: center;
        background: #FFF;
        height: 50px;
        box-shadow: 0px 2px 5px #f7f7f7;
      }
      .drawer {
        position: fixed;
        height: 100vh;
        width: calc(100vw - 50px);
        left: -100vw;
        background: #FFF;
        box-shadow: 0px 1px 3px 0px #000;
        z-index: 5;
        transition: left .3s;
      }
      .open {
        left: 0vw;
      }
    `}
    </style>
  </div>
)

Drawer.propTypes = {
  toggleDrawer: PropTypes.func,
  open: PropTypes.bool,
  children: PropTypes.node
}

export default Drawer
