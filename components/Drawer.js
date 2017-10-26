export default (props) =>
  <div>
    {props.open && (
      <div className="drawer" onClick={() => props.toggleDrawer()}>
        <p>Drawer</p>
      </div>
    )}
    <style jsx>{`
      .drawer {
        position: fixed;
        height: 100vh;
        width: 85vw;
        background: #FFF;
        z-index: 5;
      }
  `}</style>
  </div>