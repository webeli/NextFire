import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Overlay = ({ open, onClick }) => (
  <div>
    <div className={classnames('overlay', { open: open })} onClick={() => onClick()} />
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
    `}
    </style>
  </div>
)

Overlay.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func
}

export default Overlay
