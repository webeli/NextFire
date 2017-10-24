import HeaderMenu from './HeaderMenu'

export default () =>
  <div>
    <header>Header</header>
    <HeaderMenu />
    <style jsx>{`
      header {
        font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
        background: #1a171b;
        color: white;
        height: 50px;
      }
    `}</style>
  </div>