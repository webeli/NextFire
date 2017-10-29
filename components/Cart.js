import Close from '../assets/svg/md-close.svg'
import Overlay from './Overlay'
import classnames from 'classnames';

export default (props) =>
  <div>
    <Overlay onClick={() => props.toggleCart()} open={props.open} />
    <div className={classnames('cart', { open: props.open })}>
      <header>
        Cart
        <Close style={{ float: 'right', padding: 5, height: 40, color: '#FFF', fill: 'currentColor' }} onClick={() => props.toggleCart()} />
      </header>
      {props.children}
    </div>
    <style jsx>{`
      header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background: #1a171b;
        color: white;
        height: 50px;
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
  `}</style>
  </div>