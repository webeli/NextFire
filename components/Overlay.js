import Close from '../assets/svg/md-close.svg'
import classnames from 'classnames';

export default (props) =>
  <div>
    <div className={classnames('overlay', { open: props.open })} onClick={() => props.onClick()} />
    <style jsx>{`
      .overlay {
        position: fixed;
        height: 0;
        width: 0;
        background: #000;
        z-index: 4;
        opacity: 0;
        transition: opacity .3s;
      }
      .open {
        opacity: 0.2;
        height: 100vh;
        width: 100vw;
      }
  `}</style>
  </div>