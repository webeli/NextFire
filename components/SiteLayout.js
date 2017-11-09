import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
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
    const {
      page,
      title,
      toggleDrawer,
      drawerOpen,
      cartOpen,
      toggleCart,
      children
    } = this.props

    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Drawer toggleDrawer={() => toggleDrawer()} open={drawerOpen}>
          <ul>
            {!!page.categories && Object.keys(page.categories).map(cat => (
              <li key={cat}>
                <Link prefetch href={`/category?c=${cat}`}><span>{cat}</span></Link>
              </li>
            ))}
          </ul>
        </Drawer>
        <Cart toggleCart={() => toggleCart()} open={cartOpen} />
        <Header toggleDrawer={() => toggleDrawer()} toggleCart={() => toggleCart()} />
        {children}
        <style global jsx>{`
          body {
              font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
              margin: 0;
              padding: 0;
            }
          `}
        </style>
      </div>
    )
  }
}

SiteLayout.propTypes = {
  page: PropTypes.any,
  title: PropTypes.string,
  toggleDrawer: PropTypes.func,
  toggleCart: PropTypes.func,
  drawerOpen: PropTypes.bool,
  cartOpen: PropTypes.bool,
  children: PropTypes.node
}

const mapStateToProps = (state) => ({
  drawerOpen: state.drawerOpen,
  cartOpen: state.cartOpen
})

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer: bindActionCreators(toggleDrawer, dispatch),
  toggleCart: bindActionCreators(toggleCart, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SiteLayout)
