import React from 'react'
import { bindActionCreators } from 'redux'
import { toggleDrawer, toggleCart } from '../store'
import { connect } from 'react-redux'
import Head from 'next/head'
import Header from './Header'
import Drawer from './Drawer'
import Cart from './Cart'
import 'isomorphic-fetch'

class SiteLayout extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Drawer toggleDrawer={() => this.props.toggleDrawer()} open={this.props.drawerOpen}>
          <ul>
            {Object.keys(this.props.categories).map(cat => (
              <li key={cat}>{cat}</li>
            ))}
          </ul>
        </Drawer>
        <Cart toggleCart={() => this.props.toggleCart()} open={this.props.cartOpen} />
        <Header toggleDrawer={() => this.props.toggleDrawer()} toggleCart={() => this.props.toggleCart()} />
        {this.props.children}
        <style global jsx>{`
        body {
          font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
          margin: 0;
          padding: 0;
        }
      `}</style>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    drawerOpen: state.drawerOpen,
    cartOpen: state.cartOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: bindActionCreators(toggleDrawer, dispatch),
    toggleCart: bindActionCreators(toggleCart, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteLayout)