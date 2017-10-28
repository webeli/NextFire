import Close from '../assets/svg/md-close.svg'
import classnames from 'classnames';

export default (props) =>
  <div>
    <div className={classnames('drawer', { open: props.open })}>
      <header>
        <Close style={{ height: 50, color: '#FFF', fill: 'currentColor' }} onClick={() => props.toggleDrawer()}/>
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
        width: 85vw;
        margin-left: -95vw;
        background: #FFF;
        box-shadow: 1px 0px 50px 0px #000
        z-index: 5;
        transition: margin-left .3s;
      }
      .open {
        margin-left: 0vw;
      }
  `}</style>
  </div>