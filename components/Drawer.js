import Close from '../assets/svg/md-close.svg'
import Overlay from './Overlay'
import classnames from 'classnames';

export default (props) =>
  <div>
    <Overlay onClick={() => props.toggleDrawer()} open={props.open} />
    <div className={classnames('drawer', { open: props.open })}>
      <header>
        <Close style={{ padding: 5, height: 40, color: '#FFF', fill: 'currentColor' }} onClick={() => props.toggleDrawer()}/>
        Drawer
      </header>
      {props.children}
    </div>
    <style jsx>{`
      header {
        display: flex;
        align-items: center;
        background: #1a171b;
        color: white;
        height: 50px;
      }
      .drawer {
        position: fixed;
        height: 100vh;
        width: calc(100vw - 50px);
        left: -100vw;
        background: #FFF;
        box-shadow: 1px 0px 50px 0px #000
        z-index: 5;
        transition: left .3s;
      }
      .open {
        left: 0vw;
      }
  `}</style>
  </div>